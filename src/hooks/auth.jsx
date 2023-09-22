import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@RocketMovie:user", JSON.stringify(user))
      localStorage.setItem("@RocketMovie:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi poissível entrar.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@RocketMovie:token")
    localStorage.removeItem("@RocketMovie:user")

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)
      //usar setItem com um conteudo que já existe já atualiza
      localStorage.setItem("@RocketMovie:user", JSON.stringify(user))

      setData({ user, token: data.token })
      alert("Perfil atualizado com sucesso!")

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi poissível atualizar o perfil.")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@RocketMovie:token")
    const user = localStorage.getItem("@RocketMovie:user")

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
