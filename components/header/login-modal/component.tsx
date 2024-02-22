import useMediaQuery from "@/hooks/use-media-query";

import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ConfigProvider,
  Drawer,
  GetProp,
  Input,
  Menu,
  MenuProps,
  Space,
} from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { runes } from "runes2";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal, Button } from "antd";
import Link from "next/link";
import customTheme from "@/theme/theme_config";

import { breakpoints } from "@/utils/breakpoints";
import {
  ShoppingCartOutlined,
  CloseOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Router } from "react-router-dom";

enum ModalType {
  Login,
  Register,
  RestorePassword,
}

export function LoginModal({
  isOpened,
  setIsOpen,
}: {
  isOpened: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const [modalType, setModalType] = useState(ModalType.Login);

  const router = useRouter();

  function getModalTitle() {
    if (modalType === ModalType.Login) {
      return "Login";
    } else if (modalType === ModalType.Register) {
      return "Register an account";
    } else {
      return "Restore password";
    }
  }
  return (
    <Modal
      transitionName=""
      title={<div className="login-dialog-title">{getModalTitle()}</div>}
      footer={false}
      centered
      open={isOpened}
      width={600}
      closeIcon={
        <CloseOutlined
          onClick={() => {
            setIsOpen(!isOpened);
          }}
        />
      }
    >
      {modalType === ModalType.Login &&
        LoginModalContent({ setModalType, setIsOpen })}
      {modalType === ModalType.Register &&
        RegisterModalContent({ setModalType, setIsOpen })}
      {modalType === ModalType.RestorePassword &&
        RestorePasswordModalContent({ setModalType, setIsOpen })}
    </Modal>
  );
}
function RegisterModalContent({
  setModalType,
  setIsOpen,
}: {
  setModalType: (value: ModalType) => void;
  setIsOpen: (value: boolean) => void;
}) {
  const router = useRouter();
  return (
    <div className="login-dialog-content">
      <Input
        addonBefore={<UserOutlined />}
        placeholder="Name"
        showCount={true}
        size="large"
        count={{
          max: 40,
          strategy: (txt) => runes(txt).length,
          exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(""),
        }}
      ></Input>
      <Input
        addonBefore={<MailOutlined />}
        placeholder="E-mail"
        size="large"
      ></Input>
      <Input.Password
        addonBefore={<LockOutlined />}
        iconRender={() => false}
        placeholder="Password"
        size="large"
      />
      <Button className="submit-button" type="primary">
        Register
      </Button>
      <p
        onClick={() => {
          setModalType(ModalType.Login);
        }}
        className="text-button"
      >
        Already registered? log in{" "}
      </p>
    </div>
  );
}
function LoginModalContent({
  setModalType,
  setIsOpen,
}: {
  setModalType: (value: ModalType) => void;
  setIsOpen: (value: boolean) => void;
}) {
  const router = useRouter();
  return (
    <div className="login-dialog-content">
      <Input
        addonBefore={<MailOutlined />}
        placeholder="E-mail"
        size="large"
      ></Input>
      <Input.Password
        addonBefore={<LockOutlined />}
        iconRender={() => false}
        placeholder="Password"
        size="large"
      />
      <Button
        className="submit-button"
        type="primary"
        onClick={() => {
          setIsOpen(false);
          router.push("/");
        }}
      >
        Log in
      </Button>
      <p
        style={{ marginBottom: "10px" }}
        onClick={() => {
          setModalType(ModalType.Register);
        }}
        className="text-button"
      >
        Create new account
      </p>
      <p
        onClick={() => {
          setModalType(ModalType.RestorePassword);
        }}
        className="text-button"
      >
        Forgot password?
      </p>
    </div>
  );
}
function RestorePasswordModalContent({
  setModalType,
  setIsOpen,
}: {
  setModalType: (value: ModalType) => void;
  setIsOpen: (value: boolean) => void;
}) {
  const router = useRouter();
  return (
    <div className="login-dialog-content">
      <Input
        addonBefore={<MailOutlined />}
        placeholder="E-mail"
        size="large"
      ></Input>
      <div className="restore-password-button-row">
        {" "}
        <Button
          className="submit-button"
          type="primary"
          onClick={() => {
            setModalType(ModalType.Login);
          }}
        >
          Back
        </Button>
        <Button className="submit-button" type="primary">
          Restore
        </Button>
      </div>
    </div>
  );
}
