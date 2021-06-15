import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return <MeetupDetail title='Third Meetup'
        image='https://cianorte.pr.gov.br/thumb/1600x1080/noticias/4141/Portal-Cianorte_800x533.jpg'
        address='Some Street 5, Some City'
        description='This is a first meetup'
    />
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                id: meetupId,
                title: 'Third Meetup',
                image: 'https://cianorte.pr.gov.br/thumb/1600x1080/noticias/4141/Portal-Cianorte_800x533.jpg',
                address: 'Some address 3, some city',
                description: 'This is a third meetup'
            }
        }
    }
}
export default MeetupDetails;