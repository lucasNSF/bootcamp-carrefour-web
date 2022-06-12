/** ATIVIDADE 01
 * Crie uma função que retorna o nome dos membros de um Map que tem o papel
 * de ADMIN no sistema.
 *
 * 1. Crie uma função "getAdmin" que recebe um Map.
 * 2. Crie um Map e popule-o com nomes de usuários e seus papéis no sistema.
 * 3. Dentro de "getAdmin", utilize o loop "for ... of" para retornar uma lista
 * com os nomes dos usuários que são administradores.
 */

// Criação da classe Membro
class Member {
  // Construtor
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  // Métodos Getter e Setter
  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  get getAge() {
    return this.age;
  }

  set setAge(age) {
    this.age = age > 0 ? age : null;
  }

  get getRole() {
    return this.role;
  }

  set setRole(role) {
    this.role = role.toLowerCase();
  }
}

// Adicionando o método "adicionarMembro" no protótipo do Objeto Map
Map.prototype.addMember = function (...members) {
  members.forEach((member) => {
    if (!memberExist(member, this)) {
      this.set(member.getName, member.getRole);
    }
  });
};

// Adicionando o método "removerMembro" no protótipo do Objeto Map
Map.prototype.removeMember = function (...members) {
  members.forEach((member) => {
    if (memberExist(member, this)) {
      this.delete(member.getName);
    }
  });
};

// Função que verifica se um Membro já existe dentro de um Map
const memberExist = (member, map) => {
  for (let [m] of map) {
    if (member === m) {
      return true;
    }
  }
  return false;
};

// Função que retorna os Membros com função de admin
const getAdmin = (mapOfMembers) => {
  const adminMembers = [];

  for (let entrie of mapOfMembers) {
    let memberRole = entrie[1];
    let memberName = entrie[0];
    if ((memberRole === "admin")) {
      adminMembers.push(memberName);
    }
  }

  return adminMembers;
};

// Criando Map
const members = new Map();

// Criando Membros
const lucas = new Member("Lucas", 19, "admin");
const ana = new Member("Ana", 20, "developer");
const pedro = new Member("Pedro", 18, "admin");
const julia = new Member("Júlia", 22, "admin");
const joao = new Member("João", 19, "developer");
const marcos = new Member("Marcos", 20, "developer");

// Adicionando Membros no Map
members.addMember(lucas, ana, pedro, julia, joao, marcos);
console.log(members);

// Obtendo apenas os membros que são admin
console.log(getAdmin(members));
