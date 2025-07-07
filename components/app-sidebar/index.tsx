import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "../ui/button"
import { AppBarMenu } from "../app-bar/app-bar-menu"

export const AppSidebar = () => {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button variant="outline" className="md:hidden">
                    Menu
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="">
                    <DrawerTitle>Tech Store - Menu</DrawerTitle>
                </DrawerHeader>
                <div className="px-6">
                    <AppBarMenu />
                </div>

                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline">Cerrar</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
