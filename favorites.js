export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
     this.entries = [
      {
      login: 'matheuszporto',
      name: 'Matheus Mendonça',
      public_repos: '19',
      followers: '10',
      },

      {
      login: 'maykbrito',
      name: 'Mayk Brito',
      public_repos: '76',
      followers: '12000',
      }
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector("table tbody")
    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach((user) => {
      const row = this.createRow()
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      this.tbody.append(row)
    }) 
  }
  
  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td class="user">
      <img src="https:/github.com/matheuszporto.png" alt="Imagem de Matheus Mendonça">
      <a href="https://github.com/matheuszporto" target="_blank">
        <p>Matheus Mendonça</p>
        <span>matheuszporto</span>
      </a>
    </td>
    <td class="repositories">
      123
    </td>
    <td class="followers">
      1234
    </td>
    <td>
      <button id="remove-btn">Remove</button>
    </td>
    `
    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}

