import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { EjercicioBasicoDetailScene, EjercicioBasicoScene, MenuScene, RickMortyDetailScene, RickMortyScene } from './scenes';
import { ImageListScene } from './scenes/image-list.scene';

export const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MenuScene />
                </Route>
                <Route exact path="/ejercicio-basico">
                    <EjercicioBasicoScene />
                </Route>
                <Route exact path="/ejercicio-basico-detail/:id">
                    <EjercicioBasicoDetailScene />
                </Route>
                <Route exact path="/rick-morty">
                    <RickMortyScene />
                </Route>
                <Route exact path="/rick-morty-detail/:id">
                    <RickMortyDetailScene />
                </Route>
                <Route exact path="/image-list">
                    <ImageListScene />
                </Route>
            </Switch>
        </Router>
    )
}
