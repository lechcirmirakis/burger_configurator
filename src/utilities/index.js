// Function for get info for disabled remove control button

export const disabledControlsInfo = state => {
  const disabledInfo = { ...state };

  for (const key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return disabledInfo;
};
