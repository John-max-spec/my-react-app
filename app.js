new Vue({
    el: '#app',
    methods: {
        learnMore() {
            alert("Learn more about OpenAPI at: https://swagger.io/specification/");
        },
        getStarted() {
            alert("Get started with OpenAPI by visiting: https://swagger.io/tools/open-source/open-api/");
        }
    },
    mounted() {
        document.getElementById('learnMoreButton').onclick = this.learnMore;
        document.getElementById('getStartedButton').onclick = this.getStarted;
    }
});
