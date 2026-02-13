"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function FilterForm() {
    const [fromDate, setFromDate] = React.useState<Date>()
    const [toDate, setToDate] = React.useState<Date>()

    return (
        <Card className="w-full max-w-4xl shadow-xl border-t-4 border-t-primary">
            <CardHeader className="text-center border-b bg-muted/20 pb-6">
                <CardTitle className="text-2xl font-bold text-primary">
                    Country Wide Query For Resource Inventory <span className="text-foreground font-normal">Open To All</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Row 1: State & Districts */}
                    <div className="space-y-2">
                        <Label htmlFor="state" className="text-base font-semibold">State</Label>
                        <Select>
                            <SelectTrigger id="state">
                                <SelectValue placeholder="Select State" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                <SelectItem value="karnataka">Karnataka</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="district" className="text-base font-semibold">Districts</Label>
                        <Select>
                            <SelectTrigger id="district">
                                <SelectValue placeholder="Select District" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="north">North District</SelectItem>
                                <SelectItem value="south">South District</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Row 2: Category & Items */}
                    <div className="space-y-2">
                        <Label htmlFor="category" className="text-base font-semibold">List of spares for Sinter Plant</Label>
                        <Select>
                            <SelectTrigger id="category">
                                <SelectValue placeholder="Select List of spares for Sinter Plant" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="main-gearbox">Sinter machine main drive gearbox (incl. bearings & seal kits)</SelectItem>
                                <SelectItem value="main-motor">Sinter machine main drive motor (or critical motor spares)</SelectItem>
                                <SelectItem value="reduction-gearbox">Primary / secondary reduction gearbox & coupling elements</SelectItem>
                                <SelectItem value="drive-chain">Sinter machine drive chain / sprockets</SelectItem>
                                <SelectItem value="pallet-cars">Pallet cars (complete) / pallet car wheel sets</SelectItem>
                                <SelectItem value="pallet-side-plates">Pallet car side plates / grate bars</SelectItem>
                                <SelectItem value="pallet-seals">Pallet car sealing strips, end seals, side seals</SelectItem>
                                <SelectItem value="wind-boxes">Wind boxes (critical spares: isolation dampers, etc.)</SelectItem>
                                <SelectItem value="expansion-joints">Wind box / duct expansion joints</SelectItem>
                                <SelectItem value="ignition-burner">Ignition furnace burner spares</SelectItem>
                                <SelectItem value="ignition-refractory">Ignition furnace refractory modules / burner tiles</SelectItem>
                                <SelectItem value="suction-fan-rotor">Main suction fan rotor/impeller</SelectItem>
                                <SelectItem value="suction-fan-bearings">Main suction fan bearings (DE/NDE)</SelectItem>
                                <SelectItem value="suction-fan-shaft">Main suction fan shaft</SelectItem>
                                <SelectItem value="suction-fan-coupling">Main suction fan coupling</SelectItem>
                                <SelectItem value="inlet-guide-vanes">Main suction fan inlet guide vanes</SelectItem>
                                <SelectItem value="esp-spares">ESP critical spares</SelectItem>
                                <SelectItem value="bag-filter">Bag filter critical spares</SelectItem>
                                <SelectItem value="id-fan">ID fan / cooler fan rotors</SelectItem>
                                <SelectItem value="cooler-grate">Sinter cooler grate / cooler drive spares</SelectItem>
                                <SelectItem value="cooler-crusher">Cooler discharge crusher</SelectItem>
                                <SelectItem value="screen-exciter">Hot screen / cold screen exciter assembly</SelectItem>
                                <SelectItem value="screen-media">Screen media / decks</SelectItem>
                                <SelectItem value="sinter-breaker">Sinter breaker / sizing crusher</SelectItem>
                                <SelectItem value="rotary-valves">Roller feeder / star feeder / rotary valves</SelectItem>
                                <SelectItem value="conveyor-pulleys">Belt conveyor critical spares</SelectItem>
                                <SelectItem value="conveyor-motors">Conveyor gearboxes / motors</SelectItem>
                                <SelectItem value="conveyor-belt">Conveyor belt / fasteners</SelectItem>
                                <SelectItem value="conveyor-idlers">Conveyor idlers (impact + carrying)</SelectItem>
                                <SelectItem value="pulleys-bearings">Conveyor pulleys bearings & housings</SelectItem>
                                <SelectItem value="conveyor-cleaners">Conveyor cleaners / scrapers</SelectItem>
                                <SelectItem value="chute-liners">Transfer chute liners</SelectItem>
                                <SelectItem value="weigh-feeder">Weigh feeder load cells / speed sensors</SelectItem>
                                <SelectItem value="proportioning-gate">Proportioning / batching gate actuators</SelectItem>
                                <SelectItem value="control-valves">Burner air / gas control valves</SelectItem>
                                <SelectItem value="hydraulic-power">Hydraulic power pack spares</SelectItem>
                                <SelectItem value="lubrication">Lubrication system spares</SelectItem>
                                <SelectItem value="instrumentation">Critical instrumentation spares</SelectItem>
                                <SelectItem value="plc">PLC/IO cards and power supplies</SelectItem>
                                <SelectItem value="vfd">VFD spares for major drives</SelectItem>
                                <SelectItem value="gas-analyzer">Online gas analyzer spares</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="items" className="text-base font-semibold">List of very high criticality spares in Blast Furnace</Label>
                        <Select>
                            <SelectTrigger id="items">
                                <SelectValue placeholder="Select Critical Spare" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="tuyere-cooler">Tuyere cooler (complete)</SelectItem>
                                <SelectItem value="tuyere-stock">Tuyere stock (complete)</SelectItem>
                                <SelectItem value="tuyere-sleeve">Tuyere sleeve / nozzle (complete)</SelectItem>
                                <SelectItem value="blow-pipe">Blow pipe (complete)</SelectItem>
                                <SelectItem value="blow-pipe-compensator">Blow pipe compensator / expansion bellow</SelectItem>
                                <SelectItem value="bustle-main">Bustle main / hot blast main expansion joint (metallic)</SelectItem>
                                <SelectItem value="hot-blast-valve">Hot blast valve critical spares (seal/bearing/actuator)</SelectItem>
                                <SelectItem value="goggle-valve">Goggle valve / isolation valve seal kit</SelectItem>
                                <SelectItem value="bell-less-seal">Bell-less top seal ring set (main + secondary)</SelectItem>
                                <SelectItem value="charging-chute">Charging chute segments / liner plates</SelectItem>
                                <SelectItem value="throat-armour">Throat armour / wear plates (critical sets)</SelectItem>
                                <SelectItem value="stockline-radar">Stockline radar spare antenna / electronics module</SelectItem>
                                <SelectItem value="top-hydraulics">Top hydraulics spares (pump, valves, seal/hose kits)</SelectItem>
                                <SelectItem value="bleeder-valve">Bleeder valve seal kit + actuator kit</SelectItem>
                                <SelectItem value="uptake-expansion">Uptake/downcomer expansion joint (critical sizes)</SelectItem>
                                <SelectItem value="dust-catcher">Dust catcher discharge valve spares</SelectItem>
                                <SelectItem value="gcp-spares">Gas cleaning plant critical spares (bag filter/ESP)</SelectItem>
                                <SelectItem value="bf-gas-analyzer">BF gas analyzer spares (CO/CO₂/O₂), pump, filters</SelectItem>
                                <SelectItem value="trt-spares">TRT critical spares (bearing, seal, filters, probes)</SelectItem>
                                <SelectItem value="pci-lance">PCI injection lance (complete) / lance tip</SelectItem>
                                <SelectItem value="pci-distributor">PCI distributor / rotary feeder spares</SelectItem>
                                <SelectItem value="dense-phase-valve">Dense phase conveying valve seal kits (PCI)</SelectItem>
                                <SelectItem value="tap-hole-drill">Tap hole drill critical spares</SelectItem>
                                <SelectItem value="mud-gun">Mud gun critical spares</SelectItem>
                                <SelectItem value="taphole-sleeves">Taphole sleeves / copper jackets</SelectItem>
                                <SelectItem value="runner-refractory">Runner refractory blocks / cast house refractory</SelectItem>
                                <SelectItem value="fume-fan">Cast house fume extraction fan rotor/impeller</SelectItem>
                                <SelectItem value="cooling-water">Cooling water system critical spares</SelectItem>
                                <SelectItem value="main-blower">Main blower critical spares</SelectItem>
                                <SelectItem value="instrument-air">Instrument air dryer cartridges + critical solenoids</SelectItem>
                                <SelectItem value="plc-power">PLC power supply + critical IO/communication modules</SelectItem>
                                <SelectItem value="field-instruments">Critical field instruments (transmitters, thermocouples)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Row 3: From Date & To Date */}
                    <div className="space-y-2 flex flex-col">
                        <Label className="text-base font-semibold">From date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !fromDate && "text-muted-foreground"
                                    )}
                                >
                                    {fromDate ? format(fromDate, "PPP") : <span>Pick a date</span>}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={fromDate}
                                    onSelect={setFromDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-2 flex flex-col">
                        <Label className="text-base font-semibold">To date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !toDate && "text-muted-foreground"
                                    )}
                                >
                                    {toDate ? format(toDate, "PPP") : <span>Pick a date</span>}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={toDate}
                                    onSelect={setToDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Row 4: Department Type & Department Name */}
                    <div className="space-y-2">
                        <Label htmlFor="deptType" className="text-base font-semibold">List of Departments</Label>
                        <Select>
                            <SelectTrigger id="deptType">
                                <SelectValue placeholder="Select Department" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="rmhs">Raw Material Handling System (RMHS)</SelectItem>
                                <SelectItem value="stockyard">Stockyard / Ore & Coal Handling</SelectItem>
                                <SelectItem value="logistics">Railway Siding / Road Logistics / Dispatch</SelectItem>
                                <SelectItem value="weighbridge">Weighbridge</SelectItem>
                                <SelectItem value="coke-ovens">Coke Ovens</SelectItem>
                                <SelectItem value="cobp">Coke Oven By-Product Plant (COBP)</SelectItem>
                                <SelectItem value="coke-screening">Coke Screening & Dispatch</SelectItem>
                                <SelectItem value="sinter-plant">Sinter Plant</SelectItem>
                                <SelectItem value="pellet-plant">Pellet Plant</SelectItem>
                                <SelectItem value="blast-furnace">Blast Furnace</SelectItem>
                                <SelectItem value="slag-granulation">Slag Granulation / Slag Processing</SelectItem>
                                <SelectItem value="bof-ld">Basic Oxygen Furnace (BOF/LD Shop)</SelectItem>
                                <SelectItem value="secondary-metallurgy">Secondary Metallurgy (LF / VD / VOD / RH)</SelectItem>
                                <SelectItem value="ccs-ccm">Continuous Casting Shop (CCS/CCM)</SelectItem>
                                <SelectItem value="reheating-furnaces">Reheating Furnaces</SelectItem>
                                <SelectItem value="primary-mill">Bloom/Slab/Billet Mill (Primary Mill)</SelectItem>
                                <SelectItem value="plate-mill">Plate Mill</SelectItem>
                                <SelectItem value="hsm">Hot Strip Mill (HSM)</SelectItem>
                                <SelectItem value="crm">Cold Rolling Mill (CRM)</SelectItem>
                                <SelectItem value="wire-rod-mill">Wire Rod Mill</SelectItem>
                                <SelectItem value="bar-mill">Bar Mill</SelectItem>
                                <SelectItem value="structural-mill">Section/Structural Mill</SelectItem>
                                <SelectItem value="pickling-line">Pickling Line</SelectItem>
                                <SelectItem value="annealing">Annealing</SelectItem>
                                <SelectItem value="skin-pass-mill">Skin Pass Mill</SelectItem>
                                <SelectItem value="galvanizing-line">Galvanizing Line</SelectItem>
                                <SelectItem value="color-coating-line">Color Coating Line</SelectItem>
                                <SelectItem value="finishing">Finishing / Inspection / Packing</SelectItem>
                                <SelectItem value="mech-maint">Mechanical Maintenance</SelectItem>
                                <SelectItem value="elec-maint">Electrical Maintenance</SelectItem>
                                <SelectItem value="inst-auto">Instrumentation & Automation</SelectItem>
                                <SelectItem value="refractory">Refractory</SelectItem>
                                <SelectItem value="crane-maint">Crane Maintenance</SelectItem>
                                <SelectItem value="maint-planning">Maintenance Planning / Reliability</SelectItem>
                                <SelectItem value="central-workshop">Central Workshop / Machine Shop</SelectItem>
                                <SelectItem value="engineering">Engineering & Projects</SelectItem>
                                <SelectItem value="oxygen-plant">Oxygen Plant / ASU</SelectItem>
                                <SelectItem value="power-plant">Power Plant / Captive Power</SelectItem>
                                <SelectItem value="gas-network">Gas Network / Gas Mixing Station</SelectItem>
                                <SelectItem value="water-mgmt">Water Management (Intake / WTP / CTP / ETP / Cooling Towers)</SelectItem>
                                <SelectItem value="compressed-air">Compressed Air System</SelectItem>
                                <SelectItem value="fire-services">Fire Services</SelectItem>
                                <SelectItem value="safety">Safety / Occupational Health</SelectItem>
                                <SelectItem value="qa-qc">Quality Assurance / Quality Control</SelectItem>
                                <SelectItem value="chem-lab">Chemical Laboratory</SelectItem>
                                <SelectItem value="testing-lab">Metallurgical / Mechanical Testing Laboratory</SelectItem>
                                <SelectItem value="ndt-metrology">NDT / Metrology / Calibration</SelectItem>
                                <SelectItem value="materials-mgmt">Materials Management / Purchase / Stores</SelectItem>
                                <SelectItem value="marketing">Marketing & Sales / Customer Service</SelectItem>
                                <SelectItem value="finance">Finance & Accounts</SelectItem>
                                <SelectItem value="hr">HR / Training</SelectItem>
                                <SelectItem value="it">IT / Networks</SelectItem>
                                <SelectItem value="security">Security</SelectItem>
                                <SelectItem value="medical">Medical</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="deptName" className="text-base font-semibold">Integrated Steel Plants (ISPs)</Label>
                        <Select>
                            <SelectTrigger id="deptName">
                                <SelectValue placeholder="Select Integrated Steel Plants (ISPs)" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Integrated Steel Plants</SelectLabel>
                                    <SelectItem value="bsl">BSL</SelectItem>
                                    <SelectItem value="bsp">BSP</SelectItem>
                                    <SelectItem value="dsp">DSP</SelectItem>
                                    <SelectItem value="isp">ISP</SelectItem>
                                    <SelectItem value="rsp">RSP</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>Other Production Units</SelectLabel>
                                    <SelectItem value="asp">ASP</SelectItem>
                                    <SelectItem value="cfp">CFP</SelectItem>
                                    <SelectItem value="sru">SRU</SelectItem>
                                    <SelectItem value="ssp">SSP</SelectItem>
                                    <SelectItem value="visp">VISP</SelectItem>
                                    <SelectItem value="cmlo">CMLO</SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>Service Units</SelectLabel>
                                    <SelectItem value="ccso">CCSO</SelectItem>
                                    <SelectItem value="cet">CET</SelectItem>
                                    <SelectItem value="cmo">CMO</SelectItem>
                                    <SelectItem value="co">CO</SelectItem>
                                    <SelectItem value="emd">EMD</SelectItem>
                                    <SelectItem value="gd">GD</SelectItem>
                                    <SelectItem value="mti">MTI</SelectItem>
                                    <SelectItem value="rdcis">RDCIS</SelectItem>
                                    <SelectItem value="sso">SSO</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white min-w-[150px]">
                        Find Result
                    </Button>
                    <Button size="lg" variant="outline" className="min-w-[100px]" onClick={() => {
                        setFromDate(undefined);
                        setToDate(undefined);
                    }}>
                        Reset
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
