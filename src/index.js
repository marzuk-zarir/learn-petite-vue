import { createApp } from 'petite-vue'

window.addEventListener('DOMContentLoaded', () => {
    createApp().mount()
    createApp({
        users: [],
        async getUsers() {
            const res = await fetch('https://reqres.in/api/users?per_page=10')
            const users = await res.json()
            this.users = users.data
        }
    }).mount('#users')
})
