import { useForm, Controller } from "react-hook-form";

import Button from "@/components/atoms/Button";
import TextInput from "@/components/atoms/TextInput";
import Modal from "@/components/molecules/Modal";
import style from './ModalTransactionForm.module.scss'
import DownArrowCircleIcon from "@/components/atoms/Icons/DownArrowCircleIcon";
import UpArrowCircleIcon from "@/components/atoms/Icons/UpArrowCircleIcon";
import { ButtonRadio } from "@/components/atoms/ButtonRadio";
import { BaseSyntheticEvent, useRef, useState } from "react";
import { useModal } from "@/context/Modal/modalProvider";

type FormData = {
  transactionName: string;
  price: string;
  transactionType: string;
  category: string;
};

interface IModalTransactionForm {
  isOpenTransactionModal: boolean
  setIsOpenTransactionModal: (params: boolean) => void
}

export default function ModalTransactionForm() {
  const { setMountedModal, mountedModal } = useModal()
  const { control, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));
  return (
    <Modal>
      <form onSubmit={onSubmit}>
        <div>
          <h1 className={style.modalTitle}>Cadastrar Transação</h1>
        </div>
        <div className={style.dataFormWrapper}>
          <Controller
            name="transactionName"
            control={control}
            render={({ field }) => <TextInput placeholder="Nome" {...field} />}
          />
          <Controller
            name="price"
            control={control}
            render={({ field }) => <TextInput placeholder="Preço" {...field} />}
          />
          <ul className={style.buttonFormArea} onChange={(e: BaseSyntheticEvent) => setValue('transactionType', e.target.value)}>
            <ButtonRadio.Root value='in' id="1" name="transactionType" >
              <ButtonRadio.Icon>
                <UpArrowCircleIcon />
              </ButtonRadio.Icon>
              Entrada
            </ButtonRadio.Root >
            <ButtonRadio.Root value='out' id="2" name="transactionType">
              <ButtonRadio.Icon>
                <DownArrowCircleIcon />
              </ButtonRadio.Icon>
              Saída
            </ButtonRadio.Root>
          </ul>
          <Controller
            name="category"
            control={control}
            render={({ field }) => <TextInput placeholder="Categoria"{...field} />}
          />
          <Button color="secondary" height="66px" onClick={() => setMountedModal(!mountedModal)} >Cadastrar</Button>
        </div>
      </form>
    </Modal >
  )
}