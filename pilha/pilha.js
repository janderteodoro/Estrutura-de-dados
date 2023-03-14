/*
  exemplo de uso de pilha em JavaScript. Vamos criar uma "gestão de navegação"

  Como toda boa e velha pilha de dados precisamos ter algumas operações como:
    - Adicionar mais itens a pilha
    - Remover último ítem da pilha 
    - Get no último ítem da pilha sem remover o mesmo
    - Verifar se está vazia 
    - Get no tamanho
    - Limpar toda a pilha
*/


class Stack {

  constructor(){
    this.links = []
  }

  // Adicionar link a pilha, como se estivéssemos clicando em vários links seguidos
  next(link) {
    this.links.push(link)
  }

  // Removemos o último link da pilha, como se estivésemos clicando no botão de voltar
  back() {
    this.links.pop()
  }

  // Obter o último link da pilha, como se estivéssemos clicando no botão de reload
  last() {
    return this.links[this.links.length - 1]
  }

  // retorna o tamanho da minha pilha
  amountLinks() {
    return this.links.length
  }

  // Limpar a minha pilha de links
  clearLinks () {
    this.links = [];
  }

  // Verificar se a pilha está vazia
  isEmpity() {
    return this.links.length === 0
  }

}

const stack1 = new Stack()
stack1.next('http://localhost:3001/users')
stack1.next('http://localhost:3001/contact')
stack1.next('http://localhost:3001/login')
stack1.next('http://localhost:3001/email')
stack1.next('http://localhost:3001/translate')
stack1.next('http://localhost:3001/itens')
stack1.clearLinks()

console.log(stack1.last())