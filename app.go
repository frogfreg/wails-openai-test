package main

import (
	"context"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

type person struct {
	Name string
	id   int
}

func (a *App) GetMessage() string {
	return "hello!"
}

func (a *App) GetNames() []person {
	return []person{{"John", 1}, {"Jane", 2}, {"Joe", 3}}
}
