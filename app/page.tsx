'use client'
import { useEffect, useState } from 'react'

type Aluno = {
  Matricula: number
  Aluno: string
  Faltas: number
  P1: number
  P2: number
  P3: number
  Situacao: string
  Nota_para_Aprovacao_Final: number
}

export default function Home() {
  const [students, setStudents] = useState<Aluno[]>([])
  const [newList, setList] = useState<Aluno[]>([])

  const alunos: Aluno[] = [
    {
      Matricula: 1,
      Aluno: 'Eduardo',
      Faltas: 8,
      P1: 35,
      P2: 63,
      P3: 61,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 2,
      Aluno: 'Murilo',
      Faltas: 8,
      P1: 64,
      P2: 97,
      P3: 36,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 3,
      Aluno: 'Guilherme',
      Faltas: 19,
      P1: 68,
      P2: 74,
      P3: 51,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 4,
      Aluno: 'Flavia',
      Faltas: 23,
      P1: 66,
      P2: 98,
      P3: 62,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 5,
      Aluno: 'Ruan',
      Faltas: 13,
      P1: 80,
      P2: 65,
      P3: 41,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 6,
      Aluno: 'Arnando',
      Faltas: 23,
      P1: 83,
      P2: 68,
      P3: 77,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 7,
      Aluno: 'Lucas',
      Faltas: 5,
      P1: 38,
      P2: 53,
      P3: 80,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 8,
      Aluno: 'Fabio',
      Faltas: 10,
      P1: 53,
      P2: 96,
      P3: 89,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 9,
      Aluno: 'Alisson',
      Faltas: 15,
      P1: 45,
      P2: 61,
      P3: 68,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 10,
      Aluno: 'Felipe',
      Faltas: 12,
      P1: 32,
      P2: 41,
      P3: 85,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 11,
      Aluno: 'Rachel',
      Faltas: 11,
      P1: 84,
      P2: 66,
      P3: 39,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 12,
      Aluno: 'Jouy',
      Faltas: 13,
      P1: 42,
      P2: 93,
      P3: 57,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 13,
      Aluno: 'François',
      Faltas: 19,
      P1: 59,
      P2: 87,
      P3: 89,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 14,
      Aluno: 'Dâmaris',
      Faltas: 10,
      P1: 44,
      P2: 50,
      P3: 62,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 15,
      Aluno: 'Leonardo',
      Faltas: 16,
      P1: 83,
      P2: 92,
      P3: 32,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 16,
      Aluno: 'Guilherme',
      Faltas: 6,
      P1: 36,
      P2: 38,
      P3: 76,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 17,
      Aluno: 'Wesley',
      Faltas: 16,
      P1: 41,
      P2: 52,
      P3: 87,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 18,
      Aluno: 'Yuri',
      Faltas: 2,
      P1: 87,
      P2: 75,
      P3: 50,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 19,
      Aluno: 'Kira',
      Faltas: 8,
      P1: 36,
      P2: 46,
      P3: 48,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 20,
      Aluno: 'Cleici',
      Faltas: 22,
      P1: 91,
      P2: 88,
      P3: 92,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 21,
      Aluno: 'João Moacir',
      Faltas: 23,
      P1: 38,
      P2: 90,
      P3: 98,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 22,
      Aluno: 'Bruno',
      Faltas: 15,
      P1: 96,
      P2: 37,
      P3: 100,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 23,
      Aluno: 'Elcio',
      Faltas: 9,
      P1: 73,
      P2: 71,
      P3: 75,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
    {
      Matricula: 24,
      Aluno: 'Criscia',
      Faltas: 0,
      P1: 50,
      P2: 95,
      P3: 84,
      Situacao: '',
      Nota_para_Aprovacao_Final: 0,
    },
  ]
  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');
       
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);
*/

  useEffect(() => {
    function calcularSituacaoDosAlunos(alunos: Aluno[]): void {
      const alunosAtualizados = alunos.map((aluno) => {
        const notas = [aluno.P1, aluno.P2, aluno.P3]
        const media = calcularMedia(notas)
        const situacao = calcularSituacao(media, aluno.Faltas)
        const notaFinal = calcularNotaFinal(media, aluno.Faltas)
        return {
          ...aluno,
          Situacao: situacao,
          Nota_para_Aprovacao_Final: notaFinal,
        }
      })
      setStudents(alunosAtualizados)
    }
    function calcularMedia(notas: number[]): number {
      const soma = notas.reduce((acc, nota) => acc + nota, 0)
      return soma / notas.length
    }

    function calcularSituacao(media: number, faltas: number): string {
      if (faltas > 15) {
        return 'Reprovado por faltas'
      } else if (media < 50) {
        return 'Reprovado'
      } else if (media >= 50 && media < 70) {
        return 'Exame Final'
      } else {
        return 'Aprovado'
      }
    }

    function calcularNotaFinal(media: number, faltas: number): number {
      if (media >= 50 && media < 70 && faltas < 15) {
        return Math.ceil(100 - media)
      } else {
        return 0
      }
    }

    calcularSituacaoDosAlunos(alunos)
  }, [])

  return (
    <main className="bg-zinc-950 text-white flex min-h-screen flex-col items-center p-4">
      <div className="p-5 gap-3">
        <h1 className="font-bold">Engenharia de Software</h1>
        <h2 className="font-bold">Total de aulas no semestre: 60</h2>
      </div>

      <div className="overflow-x-auto border border-zinc-700 rounded-md">
        <table className="">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
              >
                Matrícula
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
              >
                Aluno
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
              >
                Faltas
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
              >
                P1
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
              >
                P2
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
              >
                P3
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
              >
                Situacao
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider"
              >
                Nota para Aprovacao Final
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.Matricula}>
                <td className="px-2 py-2 whitespace-nowrap text-center hover:bg-zinc-900 rounded-md">
                  {student.Matricula}
                </td>
                <td className="px-2 py-2 whitespace-nowrap  hover:bg-zinc-900 rounded-md">
                  {student.Aluno}
                </td>
                <td className="px-2 py-2 whitespace-nowrap  text-center hover:bg-zinc-900 rounded-md">
                  {student.Faltas}
                </td>
                <td className="px-2 py-2 whitespace-nowrap  text-center hover:bg-zinc-900 rounded-md">
                  {student.P1}
                </td>
                <td className="px-2 py-2 whitespace-nowrap  text-center hover:bg-zinc-900 rounded-md">
                  {student.P2}
                </td>
                <td className="px-2 py-2 whitespace-nowrap  text-center hover:bg-zinc-900 rounded-md">
                  {student.P3}
                </td>
                <td className="px-2 py-2 whitespace-nowrap hover:bg-zinc-900 rounded-md">
                  {student.Situacao}
                </td>
                <td className="px-2 py-2 whitespace-nowrap  text-center hover:bg-zinc-900 rounded-md">
                  {student.Nota_para_Aprovacao_Final}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
