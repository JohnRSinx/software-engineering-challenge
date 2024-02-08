import { google } from 'googleapis'
import { NextApiRequest, NextApiResponse } from 'next'


type SheetForm = {
  name: string
  email: string
}
export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'POST') {
    return res.status(statusCode:405).send(body: {message:'Only POST requests are allowed'})
  }

  const body = req.body as SheetForm

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email:process.env.GOOGLE_CLIENT_EMAIL,
        private_key:process.env.GOOGLE_PRIVATE_KEY?.replace(/\n/g,'\n')

      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    });
    const sheets = google.sheets({
      auth,
      version:'v4'
    });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range:'A1:D1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [body.name,body.email] 
        ],
      }
    });

    return res.status(200).json({
      data:response.data
    })


  }catch(e){
    return res.status(500).send({message:e.message ? 'Something went wrong'});
  }
}
