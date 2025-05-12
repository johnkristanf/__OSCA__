import { cn } from "@/lib/utils"
import { Button } from "./button"

type ButtonProps = {
    children: React.ReactNode
    className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const PrimaryButton: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <Button
            className={cn(
                'px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 hover:cursor-pointer transition',
                className
            )}
            {...props}
        >
            {children}
        </Button>

    )
}

export default PrimaryButton
