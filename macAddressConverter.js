/*
Ethernet Format to Token-Ring Format converter

During data link phase in a computer network, mac address exchange is performed by sending mac addresses in binary format.

By default, most network mac exchanges are performed in their canonical 802 (IEEE) format.

Note: Canonical form means that the least significant bit in the MAC is the first bit that maps to binary data in memory - e.g: In a LAN, the least significant bit is set to the corresponding first bit of the initial byte part in the binary form of data to be transferred -

In token ring-based networks, when circulating mac addresses the bit ordering is reversed and every first bit of bytes in memory during transfer are set to the most significant (or leftmost memory bits).This causes a left-to-right bit transfer outlined in the example below:
            In memory,      12       34       56       78       9A       BC
            canonical:   00010010 00110100 01010110 01111000 10011010 10111100

            1st bit appearing on LAN (group address indicator)
            |
            On LAN:      01001000 00101100 01101010 00011110 01011001 00111101

            In memory,
            MSB format:  01001000 00101100 01101010 00011110 01011001 00111101
                            48       2C       6A       1E       59       3D
You are required to prepare the function revOrderMark that can convert a mac address from canonical-format to token-ring format and vice-versa. The output of the function should be a mac address in IEEE format. In a case where an error input is found, a mac of 00-00-00-00-00-00 should be returned.               
*/

function convertNumber(num, fromBase, toBase) {
  return parseInt(num, fromBase).toString(toBase);
}

function validateMac(string) {
  const regex = /^([0-9A-F]{2}[-]){5}([0-9A-F]{2})$/;
  return regex.test(string)
}

function revOrderMark (address) {
  if (!validateMac(address)) return "00-00-00-00-00-00"

  const trFormat = address.split("-").map(hex => {
    return convertNumber(hex,16,2).padStart(8, '0').split("").reverse().join("")
  }) 
  const output = trFormat.map(binary => {
    return convertNumber(binary,2,16).toUpperCase().padStart(2, '0')
  }).join("-")

  return output
}

console.log(revOrderMark("8A-EF-09-2F-4D-13"), " should equal 51-F7-90-F4-B2-C8")
console.log(revOrderMark("D1-23-C4-0A-4A-02"), " should equal 8B-C4-23-50-52-40")
console.log(revOrderMark("sagfsdfasd"), " should equal 00-00-00-00-00-00")

