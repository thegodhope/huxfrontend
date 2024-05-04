
import { ComponentPropsWithRef, forwardRef } from "react";
import classNames from "classnames";
import Link from "next/link";

type Size = "xs" | "sm" | "md" | "lg";
export interface ButtonProps extends ComponentPropsWithRef<"button"> {
    variant: "primary" | "outlined" | "text";
    size: Size;
    icon?: JSX.Element;
    href?: string;
    external?: boolean;
}

export const buttonClasses = {
    base: "inline-flex justify-center items-center gap-x-2 rounded-lg font-medium font-red-hat",
    size: {
        xs: "px-3 py-2 text-xs",
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "px-5 py-3 text-base",
    },
    variant: {
        primary:
            "text-white bg-red-900 disabled:bg-red-400 disabled:hover:bg-red-inherit hover:text-white hover:bg-red-700 hover:ease-in hover:duration-75 focus:outline-none",
        outlined:
            "text-red-900 focus:outline-none bg-white rounded-lg border border-red-800 hover:bg-red-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200",
        text: "bg-transparent outlined-none",
    },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant,
            size,
            className,
            children,
            disabled,
            icon,
            href,
            external,
            ...rest
        },
        ref
    ) => {
        const classes = classNames(`
          ${buttonClasses.base}
          ${buttonClasses.size[size]}
          ${buttonClasses.variant[variant]}
          ${className ? className : ""}
    `);

        if (href) {
            return (
                <Link
                    href={href}
                    className={classNames(
                        classes,
                        " flex items-center hover:text-inherit"
                    )}
                >
                    <p>
                        {children}
                    </p>
                    {icon && icon}
                </Link>
            );
        }

        if (icon) {
            return (
                <button {...rest} type="button" className={classes}>
                    {icon}
                    <p>
                        {children}
                    </p>
                </button>
            );
        }

        return (
            <button ref={ref} className={classes} {...rest}>
                <p>
                    {children}
                </p>
            </button>
        );
    }
);

Button.displayName = "Button";


export default Button;
