export const beginSignIn = (state) => {
  state.signIn.isLoading = true;
};

export const successSignIn = (state, payload) => {
  state.userDetails.isSignIn = true;
  state.signIn.isLoading = false;
  state.signIn.isError = false;
  state.signIn.data = payload;
};

export const failSignIn = (state, payload) => {
  state.userDetails.isSignIn = false;
  state.signIn.isLoading = false;
  state.signIn.isError = true;
  state.signIn.errorMessage = payload;
};

export const successLogout = (state) => {
  state.userDetails.isSignIn = false;
  state.signIn.data = { id: null, token: null };
};

export const failLogout = (state, payload) => {
  state.userDetails.isSignIn = true;
  state.signIn.data = payload;
  state.signIn.isError = false;
};
