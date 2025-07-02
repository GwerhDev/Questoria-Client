import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../middlewares/redux/reducer';
import { Footer } from '../components/Utils/Footer';
import { Navigator } from '../components/Navigator/Navigator';
import { ModalCanvas } from '../components/Canvas/ModalCanvas';
import { ActionButton } from '../components/Buttons/ActionButton';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';


export const HUD = (props: any) => {
  const { children } = props;
  const location = useLocation();
  const hideCircularButton = location.pathname.startsWith('/profile') || location.pathname.startsWith('/dashboard');
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <div className="hud-container">
      <section className="viewport">
        {currentUser && <Navigator />}
        <main>
          <div className="container">
            {children}
          </div>
          <Footer />
        </main>
      </section>
      {currentUser && <ExperienceBar />}

      {currentUser && !hideCircularButton && <ActionButton />}
      <ModalCanvas />
    </div>
  )
}
