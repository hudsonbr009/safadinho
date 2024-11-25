const getCSS = (variavel) => {
    return getComputedStyle(document.body).
    getPropertyValue(variavel)
    }
    export {getCSS}
    import { getCSS } from "./common.js"
    const layout = {

        plot_bgcolor: getCSS('--bg-color')
        paper_bgcolor: getCSS('--bg-color')
        title: {
            text:  'Redes sociais com mais usuários no mundo'
            x: 0,
            font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
        }
        
    }
    xaxis: {
    },
    yaxis: {
    }
    xaxis: {
        tickfont: tickConfig,
        title: {
        text: 'nome das redes sociais',
        font: {
        color: getCSS('--secundary-color')
        }
    }
},
    yaxis: {
        tickfont: tickConfig,
        title: {
        text: 'bilhões de usuários ativo',
        font: {
        color: getCSS('--secundary-color')
        }
    }
}
    xaxis: {
        tickfont: {
        color: getCSS('--primary-color'),
        size: 16,
        family: getCSS('--font')
    
    },
    title: {
        const tickConfig = {
            color: getCSS('--primary-color'),
            size: 16,
            family: getCSS('--font')
            }
            
            export {getCSS, tickConfig}