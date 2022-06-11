const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      register: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/register/`,
            opts
          );

          if (resp.status !== 200) {
            alert("Account already exists, please log in!");
            return false;
          }

          const data = await resp.json();
          console.log(data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has been an error logging in!");
        }
      },
      logout: () => {
        sessionStorage.removeItem("token");
        console.log("You are logout");
        setStore({ token: null });
      },

      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/token/`,
            opts
          );

          if (resp.status !== 200) {
            alert("There was an error");
            return false;
          }

          const data = await resp.json();
          console.log(data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has been an error logging in!");
        }
      },
    },

    exampleFunction: () => {
      getActions().changeColor(0, "green");
    },

    getMessage: () => {
      // fetching data from the backend
      fetch(process.env.BACKEND_URL + "/api/hello")
        .then((resp) => resp.json())
        .then((data) => setStore({ message: data.message }))
        .catch((error) =>
          console.log("Error loading message from backend", error)
        );
    },
    changeColor: (index, color) => {
      //get the store
      const store = getStore();

      //we have to loop the entire demo array to look for the respective index
      //and change its color
      const demo = store.demo.map((elm, i) => {
        if (i === index) elm.background = color;
        return elm;
      });

      //reset the global store
      setStore({ demo: demo });
    },
  };
};
export default getState;
