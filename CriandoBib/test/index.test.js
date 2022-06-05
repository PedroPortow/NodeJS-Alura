const getFile = require('../index');

const arrayResults = [
    {
        input: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input'
    }
]

describe('getFile:: ', () => {
    it('deve retonrnar array com resultasdos', async () => {
        const result = await getFile('C:\Users\dygam\Desktop\Projetos Pós Checkplant\Cursos da Check\NodeJS\CriandoBib\test\arquivos\read.md')
        expect(result).toEqual(arrayResults)
    })
    it('deve tonarr mensagem "n há links"', async () => {
        const resultado = await getFile('C:\Users\dygam\Desktop\Projetos Pós Checkplant\Cursos da Check\NodeJS\CriandoBib\test\arquivos\read_nolinks.md')
        .expect(resultado).toBe('n há links')
    })
})

