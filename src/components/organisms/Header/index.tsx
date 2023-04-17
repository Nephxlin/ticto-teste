import Logo from '@/components/atoms/Icons/Logo'
import styles from './Header.module.scss'
import Button from '@/components/atoms/Button'
import { useModal } from '@/context/common/Modal/modalProvider'

export default function Header() {
  const { setMountedModal, mountedModal } = useModal()
  return (
    <nav className={styles.headerBackground}>
      <div className={styles.headerNavigation}>
        <Logo />
        <Button
          color="primary"
          width="245px"
          onClick={() => setMountedModal(!mountedModal)}
        >
          Nova transação
        </Button>
      </div>
    </nav>
  )
}
