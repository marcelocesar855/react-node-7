import ClasseUsuario , { idade as IdadeUsuario} from './functions'
import {getUserFromGithub, Github, buscaUsuario} from './desafio_2-3'

ClasseUsuario.info()

console.log(IdadeUsuario)

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

Github.getRepositories('marcelocesar855/frontend-inkneedle');
Github.getRepositories('rocketseat/dslkvmskv');

buscaUsuario('diego3g');