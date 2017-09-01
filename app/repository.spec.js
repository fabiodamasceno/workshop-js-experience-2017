import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { JSDOM } from 'jsdom'
import template from './repository.template'
import Repository from './repository'
import repositoryList from './repository.list'

chai.should()
chai.use(sinonChai)

describe('Repository', () => {
    describe('When calling cleanRepositoryList from repository', () => {
        it('should clean repository container', () => {
            const repositoryList = sinon.mock(repositoryList)
            const domStub = new JSDOM(`
                <input id="txtSearch" type="text" />
                <a id="btnSearch"></a>
                <ul id="repoList">
                    <div id="teste"></div>
                </ul>
            `).window;
            const repository = new Repository(domStub, repositoryList)
            repository.cleanRepositoryContainer()
            domStub.document.querySelector('#repoList').innerHTML.should.be.empty
        })
    })
    describe('When calling appendTemplateToRepositoryContainer from repository', () => {
        it('should append template in repository container', () => {
            const repositoryList = sinon.spy(repositoryList)
            const templateStub = sinon.stub()
            templateStub.withArgs('teste').returns('<div>teste</div>')
            const domStub = new JSDOM(`
                <!DOCTYPE html>
                <input id="txtSearch" type="text" />
                <a id="btnSearch"></a>
                <ul id="repoList"></ul>
            `).window;
            const repository = new Repository(domStub, repositoryList)
            repository.appendTemplateToRepositoryContainer(templateStub, 'teste')
            domStub.document.querySelector('#repoList').innerHTML.should.be.equal('<div>teste</div>')
        })
    })
    describe('When calling searchRepositories from repository', () => {
        it('should call repository list', () => {
            const mockRepositoryList = sinon.spy(repositoryList)
            const domStub = new JSDOM(`
                <!DOCTYPE html>
                <input id="txtSearch" type="text" />
                <a id="btnSearch"></a>
                <ul id="repoList"></ul>
            `).window;
            const repository = new Repository(domStub, mockRepositoryList)
            repository.searchRepositories('teste')
            mockRepositoryList.should.have.been.calledWith('teste')
        })
    })
})