import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronsUpDownIcon } from 'lucide-react'
import { CheckIcon } from 'lucide-react'

interface ListBoxComponentProps<T> {
    label: string
    options: T[]
    selected: T
    onChange: (value: T) => void
    getLabel: (option: T) => string
    getKey?: (option: T) => string | number
}

export function ListBoxComponent<T>({
    label,
    options,
    selected,
    onChange,
    getLabel,
    getKey = (opt) => (opt as any).id ?? getLabel(opt),
}: ListBoxComponentProps<T>) {
    
    return (
        <Listbox value={selected} onChange={onChange}>
            <div className="flex flex-col ">
                <Label className="block text-sm/6 font-medium text-gray-900">{label}</Label>
                <div className="relative">
                    <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6">
                        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            <span className="block truncate"> {getLabel(selected)}</span>
                        </span>
                        <ChevronsUpDownIcon
                            aria-hidden="true"
                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                    </ListboxButton>

                    <ListboxOptions
                        transition
                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                    >
                        {options.map((option) => (
                            <ListboxOption
                                key={getKey(option)}
                                value={option}
                                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-green-600 data-focus:text-white data-focus:outline-hidden"
                            >
                                <div className="flex items-center">
                                    <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                                        {getLabel(option)}
                                    </span>
                                </div>

                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-green-600 group-not-data-selected:hidden group-data-focus:text-white">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                </span>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </div>
        </Listbox>
    )
}
