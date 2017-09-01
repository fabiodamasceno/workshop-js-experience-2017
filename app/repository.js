
import template from './repository.template'

export default class Repository{
    constructor(window, list){
        this.list = list
        this.repositoryContainer = window.document.querySelector('#repoList')
        this.searchButton = window.document.querySelector('#btnSearch')
    }
    bindEvents(){
        this.searchButton.onclick = () => {
            this.cleanRepositoryContainer()
            this.searchRepositories(window.txtSearch.value)
        }
    }
    bindList(list){
        list.map((item) => {
            this.appendTemplateToRepositoryContainer(template, item)
        })
    }
    cleanRepositoryContainer(){
        this.repositoryContainer.innerHTML = ""
    }
    appendTemplateToRepositoryContainer(template, item){
        this.repositoryContainer.innerHTML += template(item)
    }
    searchRepositories(name){
        this.list(name)
            .then((res) => {
                this.bindList(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }
}
