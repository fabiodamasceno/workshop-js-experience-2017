import jquery from 'jquery'
import materialize from 'materialize-css'
import Repository from './repository'
import repositoryList from './repository.list'

const repository = new Repository(window, repositoryList)
repository.bindEvents()