import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ConnectionInformation from './ConnectionInformation';
import { useAccount } from 'wagmi';
import { Connect } from '../Connect';
import { Account } from '../Account';

export const  Navbar: React.FC = () => {
    const [{ data: accountData }] = useAccount()
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>MEV.GG</Box>
          </HStack>
          <Flex alignItems={'center'}>
              { accountData?.address
                ? <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                            <Account/>
                    </MenuButton>
                    <MenuList>
                        <ConnectionInformation/>
                    </MenuList>
                    </Menu>
                : <Connect/>}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>

          </Box>
        ) : null}
      </Box>
  );
}