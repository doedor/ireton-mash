/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
export type Gender = 'boy' | 'girl';

export interface Face {
  id: number;
  name: string;
  gender: Gender;
  imageUrl: string;
}

export const faces: Face[] = [
  { id: 1, name: "Micah Abalahin", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7643903_120.jpg?resize=200,200" },
  { id: 2, name: "Erika Abegg", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7212241_93.jpg?resize=200,200" },
  { id: 3, name: "Ingrid Abegg", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7193710_726.jpg?resize=200,200" },
  { id: 4, name: "Elie Christopher Abogo", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7280449_997.jpg?resize=200,200" },
  { id: 5, name: "Francia Ludmila Abogo", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7637634_611.jpg?resize=200,200" },
  { id: 6, name: "Lily Ackerman", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7634707_649.jpg?resize=200,200" },
  { id: 7, name: "Sebastian Aguila", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8301231_227.jpg?resize=200,200" },
  { id: 8, name: "Elena Aldana", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7934427_276.jpg?resize=200,200" },
  { id: 9, name: "Blake Alderton", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274358_938.jpg?resize=200,200" },
  { id: 10, name: "Pierce Aldridge", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7666745_594.jpg?resize=200,200" },
  { id: 11, name: "Bethel Alemu", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921069_5.jpg?resize=200,200" },
  { id: 12, name: "Beza Alemu", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7150693_574.jpg?resize=200,200" },
  { id: 13, name: "Christian Jack Alfaro", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8354508_763.jpg?resize=200,200" },
  { id: 14, name: "Keira Alfaro", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7239786_48.jpg?resize=200,200" },
  { id: 15, name: "Erin Allen", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7561682_184.jpg?resize=200,200" },
  { id: 16, name: "Lucy Allen", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7156352_587.jpg?resize=200,200" },
  { id: 17, name: "Maya Faye Al-Mtwali", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7616467_913.jpg?resize=200,200" },
  { id: 18, name: "Alyssa Amaya", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274910_482.jpg?resize=200,200" },
  { id: 19, name: "Sebastian Amaya", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7638804_715.jpg?resize=200,200" },
  { id: 20, name: "Henry Amaya-Perez", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921298_273.jpg?resize=200,200" },
  { id: 21, name: "Derek Amberg", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7161165_682.jpg?resize=200,200" },
  { id: 22, name: "Elijah Amond", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7572992_436.jpg?resize=200,200" },
  { id: 23, name: "Madison Andrade Diaz", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8278227_953.jpg?resize=200,200" },
  { id: 24, name: "Tyler Anglin", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7923730_580.jpg?resize=200,200" },
  { id: 25, name: "Andrew Antonio", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7173255_686.jpg?resize=200,200" },
  { id: 26, name: "Nicholas Araujo", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7335655_636.jpg?resize=200,200" },
  { id: 27, name: "Azael Araya", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7640611_785.jpg?resize=200,200" },
  { id: 28, name: "Avalyn Arciaga", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274654_684.jpg?resize=200,200" },
  { id: 29, name: "Victoria Arias", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7590870_99.jpg?resize=200,200" },
  { id: 30, name: "Kelly Arras", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8278400_828.jpg?resize=200,200" },
  { id: 31, name: "Molly Arras", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7172958_954.jpg?resize=200,200" },
  { id: 32, name: "Grace Artz", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7962454_791.jpg?resize=200,200" },
  { id: 33, name: "Sophia Ary", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7269196_562.jpg?resize=200,200" },
  { id: 34, name: "Lucas Aschenaki", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7973376_207.jpg?resize=200,200" },
  { id: 35, name: "Anthony Asmar", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8282263_375.jpg?resize=200,200" },
  { id: 36, name: "Raiden Atienza-Rosser", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7649994_291.jpg?resize=200,200" },
  { id: 37, name: "Dominic Atwater", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7989224_713.jpg?resize=200,200" },
  { id: 38, name: "Emma Bahdi", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7255217_225.jpg?resize=200,200" },
  { id: 39, name: "Jane Bahdi", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7969601_269.jpg?resize=200,200" },
  { id: 40, name: "Jackson Bahr", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7850291_716.jpg?resize=200,200" },
  { id: 41, name: "Maddox Baig", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8313736_290.jpg?resize=200,200" },
  { id: 42, name: "Edward Baker", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7930780_73.jpg?resize=200,200" },
  { id: 43, name: "Braeden Bakos", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7239945_378.jpg?resize=200,200" },
  { id: 44, name: "Antonella Balderrama", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7959784_300.jpg?resize=200,200" },
  { id: 45, name: "Benjamin Balducci", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7545156_789.jpg?resize=200,200" },
  { id: 46, name: "Elliot Baltazar Galdos", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8332371_528.jpg?resize=200,200" },
  { id: 47, name: "Robert Baney", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7217328_752.jpg?resize=200,200" },
  { id: 48, name: "Meredith Barker", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8297536_572.jpg?resize=200,200" },
  { id: 49, name: "Joanna Barlan", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8306895_370.jpg?resize=200,200" },
  { id: 50, name: "Zachary Barnes", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8337255_650.jpg?resize=200,200" },
  { id: 51, name: "Grace Barry", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7930765_697.jpg?resize=200,200" },
  { id: 52, name: "Tanner Bartol", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7271415_383.jpg?resize=200,200" },
  { id: 53, name: "Michael Battaglia", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7264290_15.jpg?resize=200,200" },
  { id: 54, name: "Mara Bauer", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7995759_592.jpg?resize=200,200" },
  { id: 55, name: "Mason Bauer", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7995767_393.jpg?resize=200,200" },
  { id: 56, name: "Brock Baumann", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7659957_521.jpg?resize=200,200" },
  { id: 57, name: "Matthew Belcher", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7156409_190.jpg?resize=200,200" },
  { id: 58, name: "Isaac Belicev", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8286673_954.jpg?resize=200,200" },
  { id: 59, name: "Colin Bell", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7960055_366.jpg?resize=200,200" },
  { id: 60, name: "Matthew Benieyam", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7161965_2.jpg?resize=200,200" },
  { id: 61, name: "Yonathan Benieyam", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921378_514.jpg?resize=200,200" },
  { id: 62, name: "Reesa Benitez", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7930692_896.jpg?resize=200,200" },
  { id: 63, name: "Brendan Bennett", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7980498_284.jpg?resize=200,200" },
  { id: 64, name: "Patrick Beretsel", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7920947_457.jpg?resize=200,200" },
  { id: 65, name: "Christiaan Berge", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7162406_432.jpg?resize=200,200" },
  { id: 66, name: "Rosemary Berge", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7932571_478.jpg?resize=200,200" },
  { id: 67, name: "Kristopher Bergman", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7923872_539.jpg?resize=200,200" },
  { id: 68, name: "Jason Bernardo", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8276350_936.jpg?resize=200,200" },
  { id: 69, name: "Olivia Beyer", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8427277_569.jpg?resize=200,200" },
  { id: 70, name: "Josie Billger", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7620429_693.jpg?resize=200,200" },
  { id: 71, name: "Jacob Binas", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8271236_118.jpg?resize=200,200" },
  { id: 72, name: "Nathaly Blanco", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274799_325.jpg?resize=200,200" },
  { id: 73, name: "Iker Blanco Vaquerano", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921837_444.jpg?resize=200,200" },
  { id: 74, name: "Sophie Bliss", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7563866_878.jpg?resize=200,200" },
  { id: 75, name: "Catherine Bobrowski", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7173011_365.jpg?resize=200,200" },
  { id: 76, name: "Kaiya Bodnar", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8297873_70.jpg?resize=200,200" },
  { id: 77, name: "Gideon Boehlert", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7931875_802.jpg?resize=200,200" },
  { id: 78, name: "Kate Bolster", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7923473_406.jpg?resize=200,200" },
  { id: 79, name: "Filip Boras", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7265936_475.jpg?resize=200,200" },
  { id: 80, name: "Matthias Borges", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7551306_762.jpg?resize=200,200" },
  { id: 81, name: "Ethan Borja", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8287155_505.jpg?resize=200,200" },
  { id: 82, name: "Maxwell Boudreau", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7261528_685.jpg?resize=200,200" },
  { id: 83, name: "Eden Boyd", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7572801_335.jpg?resize=200,200" },
  { id: 84, name: "Nicolas Bradshaw", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8282498_34.jpg?resize=200,200" },
  { id: 85, name: "Corinne Bragg", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8086666_312.jpg?resize=200,200" },
  { id: 86, name: "Mirabelle Brantley", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7236635_576.jpg?resize=200,200" },
  { id: 87, name: "Alec Braun", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7637824_542.jpg?resize=200,200" },
  { id: 88, name: "Thomas Brennan", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7623320_329.jpg?resize=200,200" },
  { id: 89, name: "Elizabeth Bresett", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7578577_81.jpg?resize=200,200" },
  { id: 90, name: "Matthew Bresett", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274707_398.jpg?resize=200,200" },
  { id: 91, name: "Owen Briggs", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7998923_192.jpg?resize=200,200" },
  { id: 92, name: "Ailish Brink", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921331_325.jpg?resize=200,200" },
  { id: 93, name: "Jacob Brink", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7541259_788.jpg?resize=200,200" },
  { id: 94, name: "Noah Brink", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8271512_721.jpg?resize=200,200" },
  { id: 95, name: "Jack Brookes", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7924886_2.jpg?resize=200,200" },
  { id: 96, name: "Cortland Brown", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8270963_299.jpg?resize=200,200" },
  { id: 97, name: "Evan Brown", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7822585_754.jpg?resize=200,200" },
  { id: 98, name: "Gavin Brown", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7182026_830.jpg?resize=200,200" },
  { id: 99, name: "Isabella Brown", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7593721_151.jpg?resize=200,200" },
  { id: 100, name: "Madeline Brown", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921572_144.jpg?resize=200,200" },
  { id: 101, name: "McKenzie Brown", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7804108_818.jpg?resize=200,200" },
  { id: 102, name: "Catherine Bryan", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7566658_143.jpg?resize=200,200" },
  { id: 103, name: "Emma Bucca", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8327869_528.jpg?resize=200,200" },
  { id: 104, name: "Grace Buchanan", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7261022_397.jpg?resize=200,200" },
  { id: 105, name: "Rosemary Buchanan", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8311691_740.jpg?resize=200,200" },
  { id: 106, name: "Heidi Buckland", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8271885_954.jpg?resize=200,200" },
  { id: 107, name: "Adelyn Buffaloe", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7149625_795.jpg?resize=200,200" },
  { id: 108, name: "Jackson Burdick", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8278580_898.jpg?resize=200,200" },
  { id: 109, name: "Neil Burgess", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7572989_188.jpg?resize=200,200" },
  { id: 110, name: "Diana Burke", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7572963_495.jpg?resize=200,200" },
  { id: 111, name: "Nicholas Burke", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7173625_425.jpg?resize=200,200" },
  { id: 112, name: "William Burke", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8008480_63.jpg?resize=200,200" },
  { id: 113, name: "Alejandro Burneo", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7930043_509.jpg?resize=200,200" },
  { id: 114, name: "Emilio Burneo", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7172929_572.jpg?resize=200,200" },
  { id: 115, name: "Lorelei Burns", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7540709_247.jpg?resize=200,200" },
  { id: 116, name: "Tom Burnside", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7922680_730.jpg?resize=200,200" },
  { id: 117, name: "Elizabeth Buzby", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7174555_254.jpg?resize=200,200" },
  { id: 118, name: "Lucas Cabanas", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274724_503.jpg?resize=200,200" },
  { id: 119, name: "Gabriel Cabezas", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8330796_866.jpg?resize=200,200" },
  { id: 120, name: "Joshy Cabrera", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7629164_419.jpg?resize=200,200" },
  { id: 121, name: "Vanessa Cabrera", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7569372_209.jpg?resize=200,200" },
  { id: 122, name: "Violet Cahill", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8272750_694.jpg?resize=200,200" },
  { id: 123, name: "Daniella Caicedo", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7596726_539.jpg?resize=200,200" },
  { id: 124, name: "Malia Calamug", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7928620_386.jpg?resize=200,200" },
  { id: 125, name: "Michael Callender", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7161918_773.jpg?resize=200,200" },
  { id: 126, name: "Thomas Camp", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7175242_870.jpg?resize=200,200" },
  { id: 127, name: "Colin Campbell", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8353660_623.jpg?resize=200,200" },
  { id: 128, name: "Madeleine Campbell", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7541066_544.jpg?resize=200,200" },
  { id: 129, name: "Penelope Campbell", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7578278_572.jpg?resize=200,200" },
  { id: 130, name: "Sean Campbell", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921601_197.jpg?resize=200,200" },
  { id: 131, name: "Malcolm Canty", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7210197_41.jpg?resize=200,200" },
  { id: 132, name: "Thomas Canty", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8367714_115.jpg?resize=200,200" },
  { id: 133, name: "Emily Capistran", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7927012_268.jpg?resize=200,200" },
  { id: 134, name: "Lucas Caraballo", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7920978_46.jpg?resize=200,200" },
  { id: 135, name: "Raul Cardenal", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7541900_531.jpg?resize=200,200" },
  { id: 136, name: "William Carlson", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8276322_723.jpg?resize=200,200" },
  { id: 137, name: "Henrik Carnemark", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7540714_658.jpg?resize=200,200" },
  { id: 138, name: "Caitlin Carney", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921376_736.jpg?resize=200,200" },
  { id: 139, name: "Khaliq Carson", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_6761310_793.jpg?resize=200,200" },
  { id: 140, name: "Joseph Carter", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7961574_882.jpg?resize=200,200" },
  { id: 141, name: "Isabella Caslow", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7937022_489.jpg?resize=200,200" },
  { id: 142, name: "Saoirse Caslow", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8358495_474.jpg?resize=200,200" },
  { id: 143, name: "Catherine Cassidy", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7173158_167.jpg?resize=200,200" },
  { id: 144, name: "Isabella Castro", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8276145_315.jpg?resize=200,200" },
  { id: 145, name: "Amelia Cates", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7577555_193.jpg?resize=200,200" },
  { id: 146, name: "Connor Cates", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8281104_409.jpg?resize=200,200" },
  { id: 147, name: "Ryleigh Cellini", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7540813_564.jpg?resize=200,200" },
  { id: 148, name: "Eden Chandler", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7606238_626.jpg?resize=200,200" },
  { id: 149, name: "Elon Chandler", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7957997_463.jpg?resize=200,200" },
  { id: 150, name: "Lucia Chavez", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7280397_47.jpg?resize=200,200" },
  { id: 151, name: "Naomi Chavez", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8293228_718.jpg?resize=200,200" },
  { id: 152, name: "Virginia Cheatham", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7290490_938.jpg?resize=200,200" },
  { id: 153, name: "Claire Cheney", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8281028_163.jpg?resize=200,200" },
  { id: 154, name: "Alejandro Cherry", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7969772_624.jpg?resize=200,200" },
  { id: 155, name: "Padraig Chewning", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7541243_540.jpg?resize=200,200" },
  { id: 156, name: "Beckett Christie", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7920964_833.jpg?resize=200,200" },
  { id: 157, name: "Sofia Christie", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7195907_169.jpg?resize=200,200" },
  { id: 158, name: "Patrick Christmas", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7162392_856.jpg?resize=200,200" },
  { id: 159, name: "Elijah Chukwuanu", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8155506_5.jpg?resize=200,200" },
  { id: 160, name: "Jacob Ciarrocchi", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7995700_181.jpg?resize=200,200" },
  { id: 161, name: "Angela Ciatti", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7959494_299.jpg?resize=200,200" },
  { id: 162, name: "Christina Ciatti", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8329523_762.jpg?resize=200,200" },
  { id: 163, name: "Marie Cinquegrane", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7922756_782.jpg?resize=200,200" },
  { id: 164, name: "Noelle Claeys", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7621525_84.jpg?resize=200,200" },
  { id: 165, name: "Allison Cline", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8327936_406.jpg?resize=200,200" },
  { id: 166, name: "Declan Coffin", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8275397_549.jpg?resize=200,200" },
  { id: 167, name: "Avery Cohen", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7541019_972.jpg?resize=200,200" },
  { id: 168, name: "Emma Cohen", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7541803_837.jpg?resize=200,200" },
  { id: 169, name: "Hannah Cohen", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7267119_233.jpg?resize=200,200" },
  { id: 170, name: "Annalise Collins", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8008333_833.jpg?resize=200,200" },
  { id: 171, name: "Brady Comey", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7213962_66.jpg?resize=200,200" },
  { id: 172, name: "Thomas Condie", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7540701_195.jpg?resize=200,200" },
  { id: 173, name: "William Condie", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8294750_537.jpg?resize=200,200" },
  { id: 174, name: "Ian Conner", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7997332_317.jpg?resize=200,200" },
  { id: 175, name: "Meghan Connolly", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8321177_1.jpg?resize=200,200" },
  { id: 176, name: "Ella Connolly Lisle", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8321740_998.jpg?resize=200,200" },
  { id: 177, name: "Seamus Connolly Lisle", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7201044_542.jpg?resize=200,200" },
  { id: 178, name: "Riley Constantino", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7183916_611.jpg?resize=200,200" },
  { id: 179, name: "Ronan Conway", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7608189_191.jpg?resize=200,200" },
  { id: 180, name: "Jude Cook", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7156712_975.jpg?resize=200,200" },
  { id: 181, name: "Kaleb Cook", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7160184_756.jpg?resize=200,200" },
  { id: 182, name: "Jackson Cope", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7544861_454.jpg?resize=200,200" },
  { id: 183, name: "Samantha Corallo", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7566907_888.jpg?resize=200,200" },
  { id: 184, name: "Thiago Corcui", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7268509_250.jpg?resize=200,200" },
  { id: 185, name: "Natalie Cordle", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7174301_638.jpg?resize=200,200" },
  { id: 186, name: "Connor Corley", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7620496_300.jpg?resize=200,200" },
  { id: 187, name: "Andrea Coronado", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7833755_672.jpg?resize=200,200" },
  { id: 188, name: "Sean Cosgrove", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7277343_167.jpg?resize=200,200" },
  { id: 189, name: "Mary Costello", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7199041_155.jpg?resize=200,200" },
  { id: 190, name: "Michael Costello", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8319121_412.jpg?resize=200,200" },
  { id: 191, name: "Patrick Costello", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7969618_875.jpg?resize=200,200" },
  { id: 192, name: "William Cotton", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7224613_245.jpg?resize=200,200" },
  { id: 193, name: "Caroline Couri", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7232098_186.jpg?resize=200,200" },
  { id: 194, name: "Gerald Couri", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7232107_987.jpg?resize=200,200" },
  { id: 195, name: "Tyler Crabtree", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7972323_154.jpg?resize=200,200" },
  { id: 196, name: "Cory Crawford", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7195815_496.jpg?resize=200,200" },
  { id: 197, name: "Sarah Cremer", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7639030_733.jpg?resize=200,200" },
  { id: 198, name: "Deacon Crenshaw", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7177977_178.jpg?resize=200,200" },
  { id: 199, name: "Coraline Croson", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8272596_930.jpg?resize=200,200" },
  { id: 200, name: "Kyle Cross", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7202446_323.jpg?resize=200,200" },
  { id: 201, name: "Abigail Crum", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7807484_37.jpg?resize=200,200" },
  { id: 202, name: "Ethan Cruz", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8002518_244.jpg?resize=200,200" },
  { id: 203, name: "Alexander Cruz Lipman", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7568006_550.jpg?resize=200,200" },
  { id: 204, name: "Maria Fernanda Cucho Jara", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7573104_258.jpg?resize=200,200" },
  { id: 205, name: "Carina Curley", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8271183_902.jpg?resize=200,200" },
  { id: 206, name: "James Curley", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7541979_29.jpg?resize=200,200" },
  { id: 207, name: "Kolby Curry", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7546544_756.jpg?resize=200,200" },
  { id: 208, name: "Hewen Dalton", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7545715_253.jpg?resize=200,200" },
  { id: 209, name: "Langley Ann Dalton", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8275166_642.jpg?resize=200,200" },
  { id: 210, name: "Katherine Danaher", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7252618_529.jpg?resize=200,200" },
  { id: 211, name: "An-Huy Dang", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7925637_72.jpg?resize=200,200" },
  { id: 212, name: "Sarah Danshaw", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8272581_73.jpg?resize=200,200" },
  { id: 213, name: "Caleb Danysh", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7940975_406.jpg?resize=200,200" },
  { id: 214, name: "Dominic Carlo David", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8193825_77.jpg?resize=200,200" },
  { id: 215, name: "Geornae Davis", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8082654_812.jpg?resize=200,200" },
  { id: 216, name: "Kai Davis", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7744115_640.jpg?resize=200,200" },
  { id: 217, name: "McKenna Davis", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7280007_199.jpg?resize=200,200" },
  { id: 218, name: "Quinn Davis", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7246531_958.jpg?resize=200,200" },
  { id: 219, name: "Vivienne Davis", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7649644_814.jpg?resize=200,200" },
  { id: 220, name: "Jason Day", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7606309_623.jpg?resize=200,200" },
  { id: 221, name: "Miguel De Angel", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7271970_918.jpg?resize=200,200" },
  { id: 222, name: "Rafael De Angel", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7996192_606.jpg?resize=200,200" },
  { id: 223, name: "David De Costa", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7231656_337.jpg?resize=200,200" },
  { id: 224, name: "Omar de Frias", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8011659_492.jpg?resize=200,200" },
  { id: 225, name: "Tiffany Deavers", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7201713_772.jpg?resize=200,200" },
  { id: 226, name: "Daniel Debrow", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8337150_326.jpg?resize=200,200" },
  { id: 227, name: "Alec DeCourcey", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274566_133.jpg?resize=200,200" },
  { id: 228, name: "Griffin DeCourcey", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274582_77.jpg?resize=200,200" },
  { id: 229, name: "Nathaniel Degrandi", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7560941_490.jpg?resize=200,200" },
  { id: 230, name: "Kayden Deitchman", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7557616_27.jpg?resize=200,200" },
  { id: 231, name: "Anna Dennison", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7939077_183.jpg?resize=200,200" },
  { id: 232, name: "Ella DeNunzio", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7540593_979.jpg?resize=200,200" },
  { id: 233, name: "Bryan Derr", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7992630_905.jpg?resize=200,200" },
  { id: 234, name: "Madeleine Descovich", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7938725_719.jpg?resize=200,200" },
  { id: 235, name: "Million DeSio", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7180236_52.jpg?resize=200,200" },
  { id: 236, name: "Finnian Deveans", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7263141_647.jpg?resize=200,200" },
  { id: 237, name: "Silas Devonish", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7184583_123.jpg?resize=200,200" },
  { id: 238, name: "Peter DiBella", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7172648_48.jpg?resize=200,200" },
  { id: 239, name: "Andrew Dick", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8318872_273.jpg?resize=200,200" },
  { id: 240, name: "Caroline Dick", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7136852_66.jpg?resize=200,200" },
  { id: 241, name: "Simon Dickerson", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8278183_814.jpg?resize=200,200" },
  { id: 242, name: "Aida DiGrado", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274555_471.jpg?resize=200,200" },
  { id: 243, name: "Stella DiGrado", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7920995_652.jpg?resize=200,200" },
  { id: 244, name: "Jackson Dillahunt", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7941290_654.jpg?resize=200,200" },
  { id: 245, name: "Danielle Djamson", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7464680_702.jpg?resize=200,200" },
  { id: 246, name: "Valerie Dmytrijuk", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7959823_314.jpg?resize=200,200" },
  { id: 247, name: "Elizabeth Doherty", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8347497_428.jpg?resize=200,200" },
  { id: 248, name: "Cooper Donaghy", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8196736_870.jpg?resize=200,200" },
  { id: 249, name: "Delphine Doolan", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8447422_192.jpg?resize=200,200" },
  { id: 250, name: "Christian Doricent", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8312689_705.jpg?resize=200,200" },
  { id: 251, name: "Scarlett Dorrler", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8368096_362.jpg?resize=200,200" },
  { id: 252, name: "Massey Doucet", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8272278_271.jpg?resize=200,200" },
  { id: 253, name: "Reese Doucet", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7544447_221.jpg?resize=200,200" },
  { id: 254, name: "Damari Dozier", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8311703_684.jpg?resize=200,200" },
  { id: 255, name: "Natalie Drey", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7556642_867.jpg?resize=200,200" },
  { id: 256, name: "Yvanna Dshen", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7617287_394.jpg?resize=200,200" },
  { id: 257, name: "Dallas Dsouza", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7252213_619.jpg?resize=200,200" },
  { id: 258, name: "Allison Duffield", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7234735_611.jpg?resize=200,200" },
  { id: 259, name: "Sabrina Dunton", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8096117_528.jpg?resize=200,200" },
  { id: 260, name: "Natalie Duran", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7994946_721.jpg?resize=200,200" },
  { id: 261, name: "Sage Duskie-Billen", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8414726_910.jpg?resize=200,200" },
  { id: 262, name: "Neve Dwyer", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7577326_450.jpg?resize=200,200" },
  { id: 263, name: "Quinn Dwyer", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7577229_952.jpg?resize=200,200" },
  { id: 264, name: "George Dyck", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7160424_504.jpg?resize=200,200" },
  { id: 265, name: "Samuel Dyck", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7920269_606.jpg?resize=200,200" },
  { id: 266, name: "Kathryn Easton", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7577627_966.jpg?resize=200,200" },
  { id: 267, name: "Abbagail Eaton", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8276329_385.jpg?resize=200,200" },
  { id: 268, name: "Darien Eberhart Jr.", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274765_1.jpg?resize=200,200" },
  { id: 269, name: "Declan Edwards", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8445336_889.jpg?resize=200,200" },
  { id: 270, name: "Christopher Alexander Encinas Arrieta", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7947351_455.jpg?resize=200,200" },
  { id: 271, name: "Beckett Engelhardt", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7425569_685.jpg?resize=200,200" },
  { id: 272, name: "Ava Entsua-Mensah", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8347195_125.jpg?resize=200,200" },
  { id: 273, name: "Daric Ermias", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8363951_651.jpg?resize=200,200" },
  { id: 274, name: "Leuel Eskender", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7244049_695.jpg?resize=200,200" },
  { id: 275, name: "Leah Eubanks", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274422_757.jpg?resize=200,200" },
  { id: 276, name: "Parker Evans", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7969970_837.jpg?resize=200,200" },
  { id: 277, name: "Ryan Evans", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7540116_898.jpg?resize=200,200" },
  { id: 278, name: "Isabelle Fallon", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7958786_874.jpg?resize=200,200" },
  { id: 279, name: "Marguerite Fannon", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7969680_694.jpg?resize=200,200" },
  { id: 280, name: "Ryan Fannon", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7541315_199.jpg?resize=200,200" },
  { id: 281, name: "Eli Fathelbab", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7169805_83.jpg?resize=200,200" },
  { id: 282, name: "James Feeley", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7992280_299.jpg?resize=200,200" },
  { id: 283, name: "Sebastian Feitl", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7930505_237.jpg?resize=200,200" },
  { id: 284, name: "Londyn Ferguson", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8146381_845.jpg?resize=200,200" },
  { id: 285, name: "Alejandra Ferrer", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7151155_130.jpg?resize=200,200" },
  { id: 286, name: "David Ferrer", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921842_660.jpg?resize=200,200" },
  { id: 287, name: "Andrew Fields", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8278422_131.jpg?resize=200,200" },
  { id: 288, name: "Yadueal Fikadu", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7540739_547.jpg?resize=200,200" },
  { id: 289, name: "McKenna Flaaen", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274666_95.jpg?resize=200,200" },
  { id: 290, name: "Brian Fletcher", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7217434_717.jpg?resize=200,200" },
  { id: 291, name: "Thomas Foley", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7540938_812.jpg?resize=200,200" },
  { id: 292, name: "Colman Forrer", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8303937_405.jpg?resize=200,200" },
  { id: 293, name: "Marcella Forrer", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7250664_103.jpg?resize=200,200" },
  { id: 294, name: "Claire Foster", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8266701_532.jpg?resize=200,200" },
  { id: 295, name: "Anderson Francis", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7921002_705.jpg?resize=200,200" },
  { id: 296, name: "Juliana Franco", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7544550_827.jpg?resize=200,200" },
  { id: 297, name: "Elyse Franklin", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7606397_86.jpg?resize=200,200" },
  { id: 298, name: "Elliot Freitag", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7998870_749.jpg?resize=200,200" },
  { id: 299, name: "Jack Friddle", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7983964_602.jpg?resize=200,200" },
  { id: 300, name: "Lucas Patricio Fuentes Vardicos", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8303011_886.jpg?resize=200,200" },
  { id: 301, name: "Alexander Fukuda", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7562164_254.jpg?resize=200,200" },
  { id: 302, name: "Ava Fullinwider", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7920764_889.jpg?resize=200,200" },
  { id: 303, name: "Benjamin Funk", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8274466_809.jpg?resize=200,200" },
  { id: 304, name: "Ciara Funk", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7206642_51.jpg?resize=200,200" },
  { id: 305, name: "Conor Fuqua", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7920254_164.jpg?resize=200,200" },
  { id: 306, name: "Jack Fuqua", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7149311_25.jpg?resize=200,200" },
  { id: 307, name: "Mia Gabriele", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7621942_101.jpg?resize=200,200" },
  { id: 308, name: "Thomas Gabriele", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7226611_46.jpg?resize=200,200" },
  { id: 309, name: "Dariela Galeano Raudales", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7928550_149.jpg?resize=200,200" },
  { id: 310, name: "Juliet Galicia", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7939309_92.jpg?resize=200,200" },
  { id: 311, name: "Holden Garcia", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8350830_302.jpg?resize=200,200" },
  { id: 312, name: "Felipe Garcia-Acosta", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7634468_238.jpg?resize=200,200" },
  { id: 313, name: "Mariana Garcia-Acosta", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8345857_215.jpg?resize=200,200" },
  { id: 314, name: "Katy Gauthier", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_8278472_932.jpg?resize=200,200" },
  { id: 315, name: "Madison Gerety", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7994634_563.jpg?resize=200,200" },
  { id: 316, name: "Yovela Getachew", gender: "girl", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7965590_844.jpg?resize=200,200" },
  { id: 317, name: "Gino J Giantesano", gender: "boy", imageUrl: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/847/user/large_user_7549765_337.jpg?resize=200,200" },
];

type Filter = 'boys' | 'girls' | 'both';

export default function App() {
  const [filter, setFilter] = useState<Filter>('both');
  const [elos, setElos] = useState<Record<number, number>>({});
  const [currentPair, setCurrentPair] = useState<[Face, Face] | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Load ELOs from local storage
  useEffect(() => {
    const storedElos = localStorage.getItem('facemash_elos');
    if (storedElos) {
      try {
        setElos(JSON.parse(storedElos));
      } catch (e) {
        console.error('Failed to parse elos', e);
      }
    }
    pickNewPair('both');
  }, []);

  // Save to local storage whenever Elos change
  useEffect(() => {
    if (Object.keys(elos).length > 0) {
      localStorage.setItem('facemash_elos', JSON.stringify(elos));
    }
  }, [elos]);

  const [recentlySeenIds, setRecentlySeenIds] = useState<number[]>([]);

  // Pick a new pair or a new opponent for the winner
  const pickNewPair = (currentFilter: Filter, winnerId?: number) => {
    let pool = faces;
    if (currentFilter === 'boys') pool = faces.filter(f => f.gender === 'boy');
    if (currentFilter === 'girls') pool = faces.filter(f => f.gender === 'girl');

    if (pool.length < 2) return;

    if (winnerId !== undefined) {
      // Find the winner face object
      const winnerFace = pool.find(f => f.id === winnerId);
      if (!winnerFace) {
        // If winner isn't in current pool (e.g. filter changed), pick a brand new pair
        return pickNewPair(currentFilter);
      }

      // Pick a new opponent from the pool who wasn't recently seen and isn't the winner
      const potentialOpponents = pool.filter(f => f.id !== winnerId && !recentlySeenIds.includes(f.id));
      const candidates = potentialOpponents.length > 0 ? potentialOpponents : pool.filter(f => f.id !== winnerId);
      
      const newOpponent = candidates[Math.floor(Math.random() * candidates.length)];
      
      // Keep winner, but randomize their position (left or right) for a fresh feel
      const nextPair: [Face, Face] = Math.random() > 0.5 ? [winnerFace, newOpponent] : [newOpponent, winnerFace];
      setCurrentPair(nextPair);

      // Track recently seen faces (last 24 IDs)
      setRecentlySeenIds(prev => [...prev, newOpponent.id].slice(-24));
    } else {
      // Logic for picking a completely brand new pair
      const available = pool.filter(f => !recentlySeenIds.includes(f.id));
      const finalCandidates = available.length >= 2 ? available : pool;

      const idx1 = Math.floor(Math.random() * finalCandidates.length);
      let idx2 = Math.floor(Math.random() * finalCandidates.length);
      while (idx1 === idx2 && finalCandidates.length > 1) {
        idx2 = Math.floor(Math.random() * finalCandidates.length);
      }

      const nextPair: [Face, Face] = [finalCandidates[idx1], finalCandidates[idx2]];
      setCurrentPair(nextPair);
      setRecentlySeenIds(prev => [...prev, nextPair[0].id, nextPair[1].id].slice(-24));
    }
  };

  // On filter change, pick new pair
  useEffect(() => {
    pickNewPair(filter);
  }, [filter]);

  const handleChoice = (winnerId: number, loserId: number) => {
    const winnerElo = elos[winnerId] || 1200;
    const loserElo = elos[loserId] || 1200;
    
    const expectedWinner = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
    const expectedLoser = 1 / (1 + Math.pow(10, (winnerElo - loserElo) / 400));
    
    const k = 32;
    const newWinnerElo = Math.round(winnerElo + k * (1 - expectedWinner));
    const newLoserElo = Math.round(loserElo + k * (0 - expectedLoser));

    setElos(prev => ({
      ...prev,
      [winnerId]: newWinnerElo,
      [loserId]: newLoserElo
    }));

    // Keep the winner on screen for the next round
    pickNewPair(filter, winnerId);
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono selection:bg-black selection:text-white flex flex-col items-center p-4">
      <header className="mb-8 mt-4 md:mt-12 text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest">
          IRETONMASH
        </h1>
      </header>

      <div className="mb-12 flex flex-wrap justify-center gap-4 border-4 border-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
        {(['girls', 'both', 'boys'] as Filter[]).map(f => (
          <button 
            key={f}
            className={`px-6 py-2 uppercase font-black text-lg border-4 border-transparent hover:border-black transition-all ${filter === f ? 'bg-black text-white border-black shadow-inner' : 'bg-white'}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl">
        {currentPair ? (
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center w-full justify-center">
            <button 
              className="group relative border-4 border-black p-3 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-1 transition-all"
              onClick={() => handleChoice(currentPair[0].id, currentPair[1].id)}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden border-4 border-black relative">
                <img 
                  src={currentPair[0].imageUrl} 
                  alt="Choice 1" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </button>
            
            <div className="text-3xl font-black p-6 bg-white text-black border-4 border-black aspect-square flex items-center justify-center rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10 shrink-0 transform -rotate-12">
              OR
            </div>

            <button 
              className="group relative border-4 border-black p-3 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-1 transition-all"
              onClick={() => handleChoice(currentPair[1].id, currentPair[0].id)}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden border-4 border-black relative">
                <img 
                  src={currentPair[1].imageUrl} 
                  alt="Choice 2" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </button>
          </div>
        ) : (
          <div className="text-3xl font-black uppercase tracking-widest animate-pulse border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">Loading faces...</div>
        )}
      </main>

      <footer className="mt-16 mb-12 w-full flex justify-center">
        <button 
          className="border-4 border-black bg-white px-8 py-5 font-black text-2xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
          onClick={() => setShowModal(true)}
        >
          View Leaderboard
        </button>
      </footer>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white border-8 border-black p-8 md:p-12 max-w-2xl w-full shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] relative">
            <button 
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center border-4 border-black font-black text-xl hover:bg-black hover:text-white transition-colors"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <h2 className="text-5xl font-black mb-8 uppercase border-b-4 border-black pb-4 inline-block">Coming Soon</h2>
            <p className="text-2xl font-bold uppercase leading-relaxed mb-6">
               Personal ranking algorithm is coming soon.
            </p>
            <ul className="text-lg font-bold uppercase space-y-4 list-disc list-inside">
              <li>See names of all faces</li>
              <li>Global Leaderboard</li>
              <li>Custom Elo Stats</li>
            </ul>
            <div className="mt-12 bg-black text-white p-4 text-center font-black uppercase tracking-widest">
              Please check back later
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

