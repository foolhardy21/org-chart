import { v4 as uuid } from 'uuid';

export const employees = [
    {
        _id: uuid(),
        name: 'Santosh Kumar',
        phone: 123456789,
        email: 'santosh.kumar@org.com',
        designation: 'CEO',
    },
    {
        _id: uuid(),
        name: 'Head1',
        phone: 123456789,
        email: 'head1.kumar@org.com',
        designation: 'Head',
        department: 'Staff'
    },
    {
        _id: uuid(),
        name: 'Head2',
        phone: 123456789,
        email: 'head2.kumar@org.com',
        designation: 'Head',
        department: 'Engineering'
    },
    {
        _id: uuid(),
        name: 'Head3',
        phone: 123456789,
        email: 'head3.kumar@org.com',
        designation: 'Head',
        department: 'Design'
    },
    {
        _id: uuid(),
        name: 'Leader',
        phone: 123456789,
        email: 'leader.kumar@org.com',
        designation: 'Leader',
        team: 'DTeam1',
        department: 'Design',
    },
    {
        _id: uuid(),
        name: 'Member',
        phone: 123456789,
        email: 'member.kumar@org.com',
        designation: 'Member',
        team: 'DTeam1',
        department: 'Design',
    },
    {
        _id: uuid(),
        name: 'Leader',
        phone: 123456789,
        email: 'leader.kumar@org.com',
        designation: 'Leader',
        team: 'ETeam1',
        department: 'Engineering',
    },
    {
        _id: uuid(),
        name: 'Member',
        phone: 123456789,
        email: 'member.kumar@org.com',
        designation: 'Member',
        team: 'ETeam1',
        department: 'Engineering',
    },
    {
        _id: uuid(),
        name: 'Leader',
        phone: 123456789,
        email: 'leader.kumar@org.com',
        designation: 'Leader',
        team: 'STeam1',
        department: 'Staff',
    },
    {
        _id: uuid(),
        name: 'Member',
        phone: 123456789,
        email: 'member.kumar@org.com',
        designation: 'Member',
        team: 'STeam1',
        department: 'Staff',
    },
]