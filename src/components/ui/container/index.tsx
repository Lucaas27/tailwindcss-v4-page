import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const containerVariants = cva("container mx-auto", {
    variants: {
        variant: {
            default: "px-4 sm:px-6 lg:px-10",
            narrow: "max-w-4xl px-4 sm:px-6 lg:px-10"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
    asChild?: boolean;
}

const Container: React.FC<ContainerProps> = ({className, children, variant, ...props}) => {
    return (
        <div className={cn(containerVariants({variant}), className)} {...props}>
            {children}
        </div>
    );
};

export { Container, containerVariants };
