import { Fragment, h } from 'preact'
import { BrowserRouter, Route, Routes as RRoutes } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import { apolloClient } from '@client/api/graphql'
import Cursos from '@client/Pages/Hello/Cursos'
import MeusCursos from '@client/Pages/Hello/MeusCursos'
import Perfil from '@client/Pages/Hello/Perfil'
import EditarPerfil from '@client/Pages/Hello/EditarPerfil'
import Home from '@client/Pages/Hello/Home'
import VisualizarCursos from '@client/Pages/Hello/VisualizarCursos'
import CursoAdquirido from '@client/Pages/Hello/CursoAdquirido'
import BackOffice from '@client/Pages/Hello/backoffice'
import Loginmaster from '@client/Pages/Hello/Loginmaster'
import Cadastro from '@client/Pages/Hello/Cadastro'

{
  /* IMPORTAR A FUNÇÃO QUE DESEJA USAR
import NOME-DA-FUNÇÃO from 'LOCAL DA FUÇÃO/PÁGINA' */
}

export const Routes = {
  Hello: `hello/`,
}

const Router = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <RRoutes>
        {/* <Route path={'/'} element={<HelloPage />} />
        <Route path={Routes.Hello} element={<HelloPage />} /> */}
        {/* COLOCAR O NOME DA PÁGINA E DA FUNÇÃO
        <Route path={'/NOME DA PÁGINA'} element={<NOME DA FUNÇÃO />} /> */}
        <Route path={'/CursoAdquirido'} element={<CursoAdquirido />} />
        <Route path={'/VisualizarCursos'} element={<VisualizarCursos />} />
        <Route path={'/'} element={<Home />} />
        <Route path={'/Cursos'} element={<Cursos />} />
        <Route path={'/MeusCursos'} element={<MeusCursos />} />
        <Route path={'/Perfil'} element={<Perfil />} />
        <Route path={'/EditarPerfil'} element={<EditarPerfil />} />
        <Route path={'/Home'} element={<Home />} />
        <Route path={'/Backoffice'} element={<BackOffice />} />
        <Route path={'*'} element={<>Not found</>} />
        <Route path={'/Loginmaster'} element={<Loginmaster />} />
        <Route path={'*'} element={<>Not found</>} />
        <Route path={'/Cadastro'} element={<Cadastro />} />
        <Route path={'*'} element={<>Not found</>} />
      </RRoutes>
    </BrowserRouter>
  </ApolloProvider>
)

export default Router