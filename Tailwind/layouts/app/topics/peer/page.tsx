// Peer Marker allows to change the sbilings style based on the state of the peer marker. It is useful for creating interactive components that respond to user actions or other state changes in a React application.

export default function Page(){
    return (
        <div className="peer">
            <input className="peer/male peer-checked/female:hidden peer-checked/other:hidden" type="checkbox" name="male" id="male" />
            <label className="peer-checked/male:text-red-400 peer-checked/female:hidden peer-checked/other:hidden" htmlFor="male">Male</label>

            <input className="peer/female peer-checked/male:hidden peer-checked/other:hidden" type="checkbox" name="female" id="female" />
            <label className="peer-checked/female:text-red-400 peer-checked/male:hidden peer-checked/other:hidden" htmlFor="female">Female</label>

            <input className="peer/other peer-checked/male:hidden peer-checked/female:hidden" type="checkbox" name="other" id="other" />
            <label className="peer-checked/other:text-red-400 peer-checked/male:hidden peer-checked/female:hidden" htmlFor="other">Other</label>
            <p className="hidden peer-checked/male:block">You are male</p>
            <p className="hidden peer-checked/female:block">You are female</p>
            <p className="hidden peer-checked/other:block">You are other</p>
        </div>
    )
}