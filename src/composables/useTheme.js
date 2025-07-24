import { ref, onMounted } from 'vue'

const theme = ref('dark')

export function useTheme() {
   const setTheme = (value) => {
    const html = document.documentElement
    theme.value = value
    html.classList.toggle('dark', value === 'dark')
    html.classList.toggle('light', value === 'light')
    localStorage.setItem('theme', value)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme('dark') // Default to dark theme
    }
  })

  return { theme, toggleTheme, setTheme}
}