
new Vue({
    el: '#app',
    methods: {
        openToturials() {
            window.location.href = "toturials.html"; // 导航到 tutorials.html
        }
    },
    mounted() {
        // 为按钮绑定点击事件
        document.getElementById('toturialsButton').onclick = this.openToturials;
    }
});
