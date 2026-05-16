function UserLoggerd({username}) {
    return <div>Seja bem-vindo {username}!</div>
}

function DoLogin({setUserState}) {
    return <button onClick={() => setUserState(true)}>Clique aqui e faça login</button>
}

export function Hello({ setUserState, isLogged = false, username = ""}) {
    return isLogged ? <UserLoggerd username={(username)} /> : <DoLogin setUserState= {setUserState} /> 

}
