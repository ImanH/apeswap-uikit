import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <Button
      fullWidth
      fontFamily="poppins"
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      style={{ justifyContent: "space-between" }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text bold fontFamily="poppins" color="text" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </Button>
  );
};

export default WalletCard;
