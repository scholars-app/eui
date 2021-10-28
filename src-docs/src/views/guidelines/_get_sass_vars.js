import saColors from '!!sass-vars-to-js-loader!../../../../../scholarsapp-gcp-spike/shared/ui/variables/_colors.scss';

export const useSassVars = () => {
  const themeContext = useContext(ThemeContext);
  let palette;
  switch (theme) {
    default:
      palette = saColors;
      break;
  }

  return palette;
};
