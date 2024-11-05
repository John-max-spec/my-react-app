
new Vue({
    el: '#app',
    methods: {
        openTutorials() {
            window.location.href = "tutorials.html"; // 导航到 tutorials.html
        }
    },
    mounted() {
        // 为按钮绑定点击事件
        document.getElementById('tutorialsButton').onclick = this.openTutorials;
    }
});
