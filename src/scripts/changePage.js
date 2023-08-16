export function changePage(container, id) {
    const pages = [...container.children]
    const index = pages.findIndex(page => page.id === id)
    pages.forEach(page => page.style.flex = 0)
    pages[index].style.flex = 1
}