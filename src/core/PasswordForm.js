

import { IoIosArrowBack } from 'react-icons/io';
import { PasswordInput } from './PasswordInput';
import { PasswordRequirements } from '../util/passwordvalidation';


export const RegisterPasswordForm= ({password, setStep, setPassword, confirmPassword, setConfirmPassword, validation, passwordsMatch}) => {
  return (
    <section className='bg-onboardingBg bg-no-repeat bg-cover'>
      <div className='container mx-auto px-4'>
        <div className='h-screen flex justify-center items-center'>
          <div className='flex-1'>
            <img src='/onboarding/onBoardLogo.svg' alt='logo'/>
          </div>

          <div className='h-[80vh] flex-1 flex justify-center items-center '>
            <div className='bg-white w-[80%] h-[80vh] flex justify-center items-center rounded-md'>
              <div className='p-4'>
                <div className='flex'>
                  <IoIosArrowBack className='h-7 w-7' onClick={()=>setStep(3)}/>
                  <h2 className='font-poppins w-[90%] text-2xl text-[#111111] text-center font-semibold flex items-center justify-center'>Create a password</h2>
                </div>
                <p className="text-gray-600 text-sm text-center mb-6 mt-3">
                  The password must be 8 characters, including 1 uppercase letter,
                  1 number and 1 special character.
                </p>
                <div className='pt-10'>
                  <div className="space-y-4 w-[100%]">
                    <div className='space-y-3'>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Enter password
                      </label>
                      <PasswordInput
                        value={password}
                        onChange={setPassword}
                        isValid={password ? validation.isValid : undefined}
                      />
                      <PasswordRequirements validation={validation} />
                    </div>

                    <div className='space-y-3 pb-7'>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm password
                      </label>
                      <PasswordInput
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                        isValid={confirmPassword ? passwordsMatch : undefined}
                      />
                      {confirmPassword && !passwordsMatch && (
                        <p className="mt-1 text-sm text-red-500">Passwords do not match</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={!validation.isValid || !passwordsMatch}
                      className="w-full bg-green text-white py-2 px-4 rounded-lg
                              hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed
                              transition-colors duration-200 mt-7"
                      >
                        Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};