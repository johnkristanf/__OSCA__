import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'

export const AlertDialogComponent = ({ dialogTitle, dialogMessage }: {
    dialogTitle: string,
    dialogMessage: string
}) => {
    return (
        <AlertDialog defaultOpen={true}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{ dialogTitle }</AlertDialogTitle>
                    <AlertDialogDescription>
                        { dialogMessage }
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
