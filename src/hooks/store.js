import create from 'zustand'

const useStore = create((set, get) => ({
	selectedUser: {},
	setSelectedUSer: () => {},
	users: [],
	setUsers: () => {},

	// todos: ['buy milk', 'cook dinner', 'learn zustand', 'profit'],
	// addTodo: newTodo => set(store => ({ todos: [...store.todos, newTodo] })),
	// deleteTodo: (target) => set((store) => ({todos: store.todos.filter(todo => todo !== target) })),
	// search: '',
	// setSearch: (e) => set({ search: e.target.value }),
	// filteredSearch: ()=>set(store=> ({todos: store.todos.includes(store.search) }))
}))

// set({ age: 50 })
// set({ age: get().age + 1})
// set(store => ({ age: store.age + 1 }))
// store => ({todos: store.todos.filter(todo => todo.includes(store.search)) }))

export default useStore
