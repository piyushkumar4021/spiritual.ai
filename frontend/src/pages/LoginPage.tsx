import { Box, Button, Flex, Heading, TextField, Text } from '@radix-ui/themes';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import BG_Image from '../assets/spiritual_bg.jpg';

export default function LoginPage() {
  return (
    <Box width={'100vw'} height={'100vh'}>
      <img src={BG_Image} alt='Spiritual Background Image' />
      <Box>
        <Heading as='h2' mb={'4'}>
          Log in
        </Heading>
        <form>
          <Flex maxWidth={'360px'} direction={'column'} gapY={'3'}>
            <label htmlFor='email'>
              Email
              <TextField.Root
                mt={'1'}
                id='email'
                placeholder='Enter Your Email'
              />
            </label>
            <label htmlFor='password'>
              Password
              <TextField.Root
                mt={'1'}
                id='password'
                placeholder='Enter your Password'
              />
            </label>

            <Button>Log in</Button>
            <Button variant='outline'>
              <FcGoogle /> Log in with Google
            </Button>
          </Flex>
        </form>

        <Text mt={'2'} as='p'>
          Don't have an account?{' '}
          <Link to={'/signup'}>
            <Text color='indigo' weight={'medium'}>
              Sign up
            </Text>
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
