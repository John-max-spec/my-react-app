
new Vue({
    el: '#app',
    methods: {
        openTutorials() {
            window.location.href = "toturials.html"; // 导航到 toturials.html
        }
    },
    mounted() {
        // 为按钮绑定点击事件
        document.getElementById('tutorialsButton').onclick = this.openTutorials;
    }
});
