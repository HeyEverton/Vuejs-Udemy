new Vue({
    el:'#app',
    data:{
        classParagrafo:'red',
        msg: 'Teste de mensagem'
        
    },
    methods: {
        corP(cor) {
            this.classParagrafo = cor;
        }
    },
})