import { useForm, Controller } from 'react-hook-form'
import Button from '@/components/atoms/Button'
import TextInput from '@/components/atoms/Inputs/TextInput'
import CurrencyInput from '@/components/atoms/Inputs/CurrencyInput'
import Modal from '@/components/molecules/Modal'

import DownArrowCircleIcon from '@/components/atoms/Icons/DownArrowCircleIcon'
import UpArrowCircleIcon from '@/components/atoms/Icons/UpArrowCircleIcon'
import { ButtonRadio } from '@/components/atoms/ButtonRadio'
import { BaseSyntheticEvent } from 'react'
import { useModal } from '@/context/common/Modal/modalProvider'
import { useTransactionContext } from '@/context/serealize/Transaction/TransactionProvider'

import style from './ModalTransactionForm.module.scss'

type FormData = {
  transactionName: string
  price: number
  transactionType: string
  category: string
}

export default function ModalTransactionForm() {
  const { setMountedModal, mountedModal } = useModal()
  const { createTransaction } = useTransactionContext()

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = handleSubmit((data) => {
    createTransaction(data)
    setMountedModal(!mountedModal)
  })

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
            render={({ field }) => (
              <TextInput required placeholder="Nome" {...field} />
            )}
          />
          <Controller
            name="price"
            control={control}
            render={() => (
              <CurrencyInput
                required
                placeholder="Preço"
                onValueChange={(values) =>
                  setValue('price', values.floatValue ?? 0)
                }
              />
            )}
          />
          <ul
            className={style.buttonFormArea}
            onChange={(e: BaseSyntheticEvent) =>
              setValue('transactionType', e.target.value)
            }
          >
            <ButtonRadio.Root value="in" id="1" name="transactionType">
              <ButtonRadio.Icon>
                <UpArrowCircleIcon />
              </ButtonRadio.Icon>
              Entrada
            </ButtonRadio.Root>
            <ButtonRadio.Root value="out" id="2" name="transactionType">
              <ButtonRadio.Icon>
                <DownArrowCircleIcon />
              </ButtonRadio.Icon>
              Saída
            </ButtonRadio.Root>
          </ul>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <TextInput required placeholder="Categoria" {...field} />
            )}
          />
          <Button type="submit" color="secondary" height="66px">
            Cadastrar
          </Button>
        </div>
      </form>
    </Modal>
  )
}
