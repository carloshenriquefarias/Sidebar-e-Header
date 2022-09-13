import {Flex, Button, Stack, Box, Text, Link, Icon } from '@chakra-ui/react'
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'


export function SideBar(){
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text 
                        fontWeight="bold" 
                        fontSize="small" 
                        color="gray.400"
                    >
                        GERAL
                    </Text>

                    {/* //LISTA DE MENUS */}
                    <Stack spacing="4" mt="8" align="stretch"> 
                        <Link display="flex" alignItems="center">
                            <Icon as={RiDashboardLine} fontSize="20"/> 
                            <Text ml="4" fontWeight="medium">Dashboard</Text>                     
                        </Link>                        
                        <Link display="flex" alignItems="center">
                            <Icon as={RiContactsLine} fontSize="20"/> 
                            <Text ml="4" fontWeight="medium">Usuarios</Text>                     
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text 
                        fontWeight="bold" 
                        fontSize="small" 
                        color="gray.400"
                    >
                        AUTOMAÇÃO
                    </Text>

                    {/* //LISTA DE MENUS */}
                    <Stack spacing="4" mt="8" align="stretch"> 
                        <Link display="flex" alignItems="center">
                            <Icon as={RiInputMethodLine} fontSize="20"/> 
                            <Text ml="4" fontWeight="medium">Formulários</Text>                     
                        </Link>                        
                        <Link display="flex" alignItems="center">
                            <Icon as={RiGitMergeLine} fontSize="20"/> 
                            <Text ml="4" fontWeight="medium">Automação</Text>                     
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
        
    )
}