import axios from 'axios';

const delay = async() => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay().then(async () => {
        console.log('1s');
        await delay().then(async () => {
            console.log('2s');
            await delay().then(async () => {
                console.log('3s');
            });
         })
    });
}

umPorSegundo();

export async function getUserFromGithub(user) {
    await axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    })
}

export class Github {
    static async  getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Repositório não existe');
        })
    }
}

export const buscaUsuario = async usuario => {
    await axios.get(`https://api.github.com/users/${usuario}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    });
}