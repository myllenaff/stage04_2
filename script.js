const students = [
  {
    name: 'Luiz',
    n1: 10,
    n2: 8,
    n3: 7
  },
  {
    name: 'Alexandra',
    n1: 8,
    n2: 5,
    n3: 4
  },
  {
    name: 'Carla',
    n1: 6,
    n2: 6,
    n3: 8
  },

  {
    name: 'Isaac',
    n1: 7,
    n2: 6,
    n3: 8
  }
]

for (let student of students) {
  let average = (Number(student.n1) + Number(student.n2) + Number(student.n3)) / 3
  average = average.toFixed(2)
  let result = average >= 7

  if (result) {
   alert("A média do(a) aluno(a) " + student.name + " é: "  + average + " \n Parabéns! Você foi aprovado(a) no concurso!")
  } else {
     alert ("A média do(a) aluno(a) " + student.name + " é: " + average + " \n Não foi dessa vez! Tente novamente!")
  }
}


